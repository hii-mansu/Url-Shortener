import urlRepository from "./url.repository.js";
import counterRepository from "../counter/counter.repository.js";
import { toBase62 } from "../../shared/utils/base62.js";
import { Types } from "mongoose";
import { CreateUrlDto, RedirectUrlDto } from "./url.dto.js";
import { NotFoundError } from "../../errors/NotFoundError.js";
import { ForbiddenError } from "../../errors/ForbiddenError.js";
import { GoneError } from "../../errors/GoneError.js";
import { parseUserAgent } from "../../shared/utils/userAgent.js";
import redisClient from "../../shared/lib/redis.js";
import { analyticsQueue } from "../../queues/analytics.queue.js";

class UrlService {
  async create(userId: Types.ObjectId, urlData: CreateUrlDto) {
    const sequence = await counterRepository.getNextSequence();

    const shortCode = toBase62(sequence);

    const url = await urlRepository.create({
      originalUrl: urlData.originalUrl,
      shortCode,
      user: userId,
      isActive: true,
      expiresAt: null,
    });

    return {
      id: url.id,
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
    };
  }

  async redirect(data: RedirectUrlDto) {
    const cacheKey = `url:${data.shortCode}`;

    const cachedUrl = await redisClient.get(cacheKey);

    let url;

    if (cachedUrl) {
      url = JSON.parse(cachedUrl);
    } else {
      url = await urlRepository.findByShortCode(data.shortCode);

      if (!url) {
        throw new NotFoundError("Short URL not found.");
      }
      await redisClient.set(
        cacheKey,
        JSON.stringify({
          id: url.id,
          originalUrl: url.originalUrl,
          isActive: url.isActive,
          expiresAt: url.expiresAt,
        }),
        {
          EX: 60 * 60 * 24,
        },
      );
    }

    if (!url.isActive) {
      throw new ForbiddenError("This link is inactive.");
    }

    if (url.expiresAt && new Date(url.expiresAt) < new Date()) {
      throw new GoneError("Expired link.");
    }

    const { browser, device } = parseUserAgent(data.userAgent);

    analyticsQueue.add("record-click", {
        urlId: url.id.toString(),
        browser,
        device,
        ip:data.ip ?? "Unknown",
      })
      .catch((error) => {
        console.error("Failed to queue analytics:", error);
      });

    return url.originalUrl;
  }

  async getMyUrls(userId: Types.ObjectId) {
    return urlRepository.findByUser(userId);
}
}

export default new UrlService();
