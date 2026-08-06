import { Router } from "express";
import analyticsController from "./analytics.controller.js";
import { protectMiddleware } from '../../middlewares/protect.middleware.js'

const analyticsRouter = Router();

analyticsRouter.get(
    "/:id/analytics",
    protectMiddleware,
    analyticsController.analytics
);

export default analyticsRouter;