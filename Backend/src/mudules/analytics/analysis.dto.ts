import { Types } from "mongoose";


export interface RecordClickDto {
    urlId: Types.ObjectId;
    browser: string;
    device: string;
    country: string;
}