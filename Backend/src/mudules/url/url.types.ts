import { Types } from "mongoose";

export interface IUrl {
    originalUrl: string;
    shortCode: string;
    user: Types.ObjectId;
    isActive: boolean;
    expiresAt?: Date | null;
}
