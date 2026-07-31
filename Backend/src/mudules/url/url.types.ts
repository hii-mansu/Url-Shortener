import { Types } from "mongoose";

export interface IUrl {
    originalUrl: string;
    shortCode: string;
    user: Types.ObjectId;
    clicks: number;
    isActive: boolean;
    expiresAt?: Date | null;
}

export interface CreateUrlDto {
    originalUrl: string;
}