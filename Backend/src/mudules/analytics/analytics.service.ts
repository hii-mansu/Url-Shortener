import { CreateAnalyticsDto } from "./analysis.dto.js";
import analyticsRepository from "./analytics.repository.js";



class AnalyticsService {
    async create(data: CreateAnalyticsDto) {
        return analyticsRepository.create(data);
    }
}

export default new AnalyticsService();