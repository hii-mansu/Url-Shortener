import analyticsService from "./analytics.service.js";


class analyticsController {
    analytics = async (req: Request, res: Response) => {
    const data = await analyticsService.analytics(
        req.params.id,
        req.user._id
    );

    return res.status(200).json({
        success: true,
        message: "Analytics fetched successfully.",
        data,
    });
};
}
export default new analyticsController();
