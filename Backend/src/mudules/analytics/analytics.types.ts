import { Types } from "mongoose";

export interface IAnalytics {
    url: Types.ObjectId;
    totalClicks: number;
    browsers: Map<string, number>;
    devices: Map<string, number>;
    countries: Map<string, number>;
}