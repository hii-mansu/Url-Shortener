import { Types } from "mongoose";

export interface IAnalytics {
    url: Types.ObjectId;
    browser: string;
    os: string;
    device: string;
    country?: string;
}