import Analytics from "./analytics.model.js";
import { IAnalytics } from "./analytics.types.js";

class AnalyticsRepository {
    async create(analyticsData: IAnalytics) {
        return Analytics.create(analyticsData);
    }

    async findByUrl(urlId: string) {
        return Analytics.find({ url: urlId }).sort({ createdAt: -1 });
    }

    async findAnalyticsByUrl(urlId: string) {
    return Analytics.find({ url: urlId }).sort({ createdAt: -1 });
}
}

export default new AnalyticsRepository();