import urlRepository from "./url.repository.js";
import counterRepository from "../counter/counter.repository.js";
import { toBase62 } from "../../shared/utils/base62.js";
import { Types } from "mongoose";
import { CreateUrlDto } from "./url.dto.js";

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
}

export default new UrlService();
