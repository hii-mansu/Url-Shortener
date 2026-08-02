import urlRepository from "./url.repository.js";
import counterRepository from "../counter/counter.repository.js";
import { toBase62 } from "../../shared/utils/base62.js";
import { Types } from "mongoose";
import { CreateUrlDto } from "./url.dto.js";
import { NotFoundError } from "../../errors/NotFoundError.js";
import { ForbiddenError } from "../../errors/ForbiddenError.js";
import { GoneError } from "../../errors/GoneError.js";

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

  async redirect(shortCode: string) {
    const url = await urlRepository.findByShortCode(shortCode);

    if (!url) {
        throw new NotFoundError("Short URL not found.");
    }

    if (!url.isActive) {
        throw new ForbiddenError("This link is inactive.");
    }

    if (url.expiresAt && url.expiresAt < new Date()) {
        throw new GoneError("This link has expired.");
    }

    await counterRepository.incrementClicks(url.id);

    return url.originalUrl;
}
}

export default new UrlService();
