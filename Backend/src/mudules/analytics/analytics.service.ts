import { Types } from "mongoose";
import { ForbiddenError } from "../../errors/ForbiddenError.js";
import { NotFoundError } from "../../errors/NotFoundError.js";
import { RecordClickDto } from "./analysis.dto.js";
import analyticsRepository from "./analytics.repository.js";
import urlRepository from "../url/url.repository.js";





class AnalyticsService {


    async getAnalytics(urlId: string, userId: Types.ObjectId) {
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

    async recordClick(data: RecordClickDto) {
        const browser = data.browser || "Unknown";
        const device = data.device || "Unknown";
        const country = data.country || "Unknown";

        return analyticsRepository.increment(
            data.urlId,
            browser,
            device,
            country
        );
    }
}

export default new AnalyticsService();