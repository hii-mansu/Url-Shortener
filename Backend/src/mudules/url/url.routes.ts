import { Router } from "express";
import { protectMiddleware } from "../../middlewares/protect.middleware.js";
import { validateRequest } from "../../middlewares/validateRequest.js";
import urlController from "./url.controller.js";
import { createUrlSchema, updateUrlSchema } from "./url.validator.js";

const urlRouter = Router();

urlRouter.post(
  "/create",
  protectMiddleware,
  validateRequest(createUrlSchema),
  urlController.create,
);

urlRouter.get("/getAll", protectMiddleware, urlController.getMyUrls);

urlRouter.get("/getone/:id", protectMiddleware, urlController.getById); //nw

urlRouter.patch(
    "/update/:id",
    protectMiddleware,
    validateRequest(updateUrlSchema),
    urlController.update
);

urlRouter.delete(
    "/delete/:id",
    protectMiddleware,
    urlController.delete
); //nw

export default urlRouter;
