import urlRepository from "./url.repository.js";
import counterRepository from "../counter/counter.repository.js";
import { toBase62 } from "../../shared/utils/base62.js";
import { Types } from "mongoose";
import { CreateUrlDto, RedirectUrlDto } from "./url.dto.js";
import { NotFoundError } from "../../errors/NotFoundError.js";
import { ForbiddenError } from "../../errors/ForbiddenError.js";
import { GoneError } from "../../errors/GoneError.js";
import { parseUserAgent } from "../../shared/utils/userAgent.js";
import analyticsService from "../analytics/analytics.service.js";
import redisClient from "../../shared/lib/redis.js";

class UrlService {
  async create(userId: Types.ObjectId, urlData: CreateUrlDto) {
    const sequence = await counterRepository.getNextSequence();

    const shortCode = toBase62(sequence);

    const url = await urlRepository.create({
      originalUrl: urlData.originalUrl,
      shortCode,
      user: userId,
      clicks: 0,
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
            }
        );
    }

    if (!url.isActive) {
        throw new ForbiddenError("This link is inactive.");
    }

    if (url.expiresAt && new Date(url.expiresAt) < new Date()) {
        throw new GoneError("Expired link.");
    }

    await counterRepository.incrementClicks(url.id);

    const { browser, os, device } = parseUserAgent(data.userAgent);

    await analyticsService.create({
        url: url.id,
        browser,
        os,
        device,
        country: "Unknown",
    });

    return url.originalUrl;
}
}

export default new UrlService();
