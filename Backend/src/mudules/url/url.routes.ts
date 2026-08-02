import { Router } from "express";
import { protectMiddleware } from "../../middlewares/protect.middleware.js";
import { validateRequest } from "../../middlewares/validateRequest.js";
import { createUrlSchema } from "./url.validation.js";
import urlController from "./url.controller.js";

const urlRouter = Router();

urlRouter.post(
  "/create",
  protectMiddleware,
  validateRequest(createUrlSchema),
  urlController.create,
);


export default urlRouter;
