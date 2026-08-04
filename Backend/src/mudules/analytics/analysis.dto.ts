import { Types } from "mongoose";

export interface CreateAnalyticsDto {
    url: Types.ObjectId;
    browser: string;
    os: string;
    device: string;
    country?: string;
}