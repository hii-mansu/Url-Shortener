import { Types } from "mongoose";
import Url from "./url.model.js";
import { IUrl } from "./url.types.js";

class UrlRepository {
    async create(urlData: IUrl) {
        return Url.create(urlData);
    }

    async findByShortCode(shortCode: string) {
        return Url.findOne({ shortCode });
    }

    async findByUser(userId: Types.ObjectId) {
        return Url.find({ user: userId }).sort({ createdAt: -1 });
    }

    async findById(id: string) {
        return Url.findById(id);
    }

    async deleteById(id: string) {
        return Url.findByIdAndDelete(id);
    }



}



export default new UrlRepository();