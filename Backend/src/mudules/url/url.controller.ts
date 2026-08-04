import { Request, Response } from "express";
import urlService from "./url.service.js";

interface RedirectParams {
  shortCode: string;
}

class UrlController {
  create = async (req: Request, res: Response) => {
    const data = await urlService.create(req.user._id, req.body);
    return res.status(201).json({
      success: true,
      message: "URL shorted successfully.",
      data,
    });
  };

redirect = async (req: Request<RedirectParams>, res: Response) => {
    const originalUrl = await urlService.redirect({
        shortCode: req.params.shortCode,
        userAgent: req.headers["user-agent"] || "",
        ip: req.ip,
    });

    return res.redirect(originalUrl);
};
}

export default new UrlController();
