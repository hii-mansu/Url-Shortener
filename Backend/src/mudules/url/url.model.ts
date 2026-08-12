import mongoose from "mongoose";
import { IUrl } from "./url.types.js";
import { Schema } from "mongoose";

const urlSchema = new Schema<IUrl>(
  {
    originalUrl: {
      type: String,
      required: true,
      trim: true,
    },

    shortCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    expiresAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

urlSchema.index({ user: 1 });

const Url = mongoose.model("Url", urlSchema);
export default Url;
