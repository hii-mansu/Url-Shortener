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
      ip: req.ip ?? "Unknown",
    });

    return res.redirect(originalUrl);
  };

  getMyUrls = async (req: Request, res: Response) => {
    const urls = await urlService.getMyUrls(req.user._id);

    return res.status(200).json({
      success: true,
      message: "URLs fetched successfully.",
      data: urls,
    });
  };

  getById = async (req: Request, res: Response) => {
    const url = await urlService.getById(req.params.id as string, req.user._id);

    return res.status(200).json({
      success: true,
      message: "URL fetched successfully.",
      data: url,
    });
  };

  update = async (req: Request, res: Response) => {
    const url = await urlService.update(
      req.params.id as string,
      req.user._id,
      req.body,
    );

    return res.status(200).json({
      success: true,
      message: "URL updated successfully.",
      data: url,
    });
  };

  delete = async (req: Request, res: Response) => {
    await urlService.delete(
        req.params.id as string,
        req.user._id
    );

    return res.status(200).json({
        success: true,
        message: "URL deleted successfully.",
    });
};
}

export default new UrlController();
