import { Types } from "mongoose";
import { ForbiddenError } from "../../errors/ForbiddenError.js";
import { NotFoundError } from "../../errors/NotFoundError.js";
import { CreateAnalyticsDto } from "./analysis.dto.js";
import analyticsRepository from "./analytics.repository.js";
import urlRepository from "../url/url.repository.js";



class AnalyticsService {
    async create(data: CreateAnalyticsDto) {
        return analyticsRepository.create(data);
    }

    async analytics(urlId: string, userId: Types.ObjectId) {
    const url = await urlRepository.findById(urlId);

    if (!url) {
        throw new NotFoundError("URL not found.");
    }

    if (url.user.toString() !== userId.toString()) {
        throw new ForbiddenError("You are not allowed to access this URL.");
    }

    const analytics = await analyticsRepository.findByUrl(urlId);

    return {
        url,
        analytics,
    };
}
}

export default new AnalyticsService();