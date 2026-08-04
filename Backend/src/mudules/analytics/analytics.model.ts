import { Schema, model } from "mongoose";
import { IAnalytics } from "./analytics.types.js";

const analyticsSchema = new Schema<IAnalytics>(
    {
        url: {
            type: Schema.Types.ObjectId,
            ref: "Url",
            required: true,
        },

        browser: {
            type: String,
            required: true,
        },

        os: {
            type: String,
            required: true,
        },

        device: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            default: "Unknown",
        },
    },
    {
        timestamps: true,
    }
);

analyticsSchema.index({ url: 1, createdAt: -1 });

const Analytics = model("Analytics", analyticsSchema);

export default Analytics;