import { Types } from "mongoose";
import Analytics from "./analytics.model.js";
import { IAnalytics } from "./analytics.types.js";

class AnalyticsRepository {
  async create(analyticsData: IAnalytics) {
    return Analytics.create(analyticsData);
  }


  async findByUrl(urlId: string) {
    return Analytics.findOne({
      url: urlId,
    });
  }

  async findAnalyticsByUrl(urlId: string) {
    return Analytics.find({ url: urlId }).sort({ createdAt: -1 });
  }

  async increment(
    urlId: Types.ObjectId,
    browser: string,
    device: string,
    country: string,
  ) {
    return Analytics.findOneAndUpdate(
      { url: urlId },
      {
        $inc: {
          totalClicks: 1,
          [`browsers.${browser}`]: 1,
          [`devices.${device}`]: 1,
          [`countries.${country}`]: 1,
        },
        $setOnInsert: {
          url: urlId,
        },
      },
      {
        new: true,
        upsert: true,
      },
    );
  }
}

export default new AnalyticsRepository();
