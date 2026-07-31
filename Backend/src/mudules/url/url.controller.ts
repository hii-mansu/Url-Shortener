import { Request, Response } from "express";
import urlService from "./url.service.js";
import { success } from "zod";


class UrlController{
    create = async(req:Request, res:Response) => {
        const data = await urlService.create(req.user._id, req.body);
        return res.status(201).json({
            success:true,
            message:"URL shorted successfully.",
            data
        })
    }
}

export default new UrlController();