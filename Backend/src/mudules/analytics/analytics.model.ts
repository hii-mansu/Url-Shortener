import { Schema, model } from "mongoose";
import { IAnalytics } from "./analytics.types.js";

const analyticsSchema = new Schema<IAnalytics>(
    {
        url: {
            type: Schema.Types.ObjectId,
            ref: "Url",
            required: true,
            unique: true,
        },

        totalClicks: {
            type: Number,
            default: 0,
        },

        browsers: {
            type: Map,
            of: Number,
            default: {},
        },

        devices: {
            type: Map,
            of: Number,
            default: {},
        },

        countries: {
            type: Map,
            of: Number,
            default: {},
        },
    },
    {
        timestamps: true,
    }
);

const Analytics = model("Analytics", analyticsSchema);

export default Analytics;