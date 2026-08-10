import { Request, Response } from "express";
import analyticsService from "./analytics.service.js";

class analyticsController {
  getAnalytics = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const data = await analyticsService.getAnalytics(id, req.user._id);

    return res.status(200).json({
      success: true,
      message: "Analytics fetched successfully.",
      data,
    });
  };
}
export default new analyticsController();
