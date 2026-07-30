import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest.js';
import { loginSchema, registerSchema } from './auth.validation.js';
import authController from './auth.controller.js';
import { protectMiddleware } from '../../middlewares/protect.middleware.js';

const authRouter = express.Router();

authRouter.post("/register", validateRequest(registerSchema), authController.register);
authRouter.post("/login", validateRequest(loginSchema), authController.login);
authRouter.get("/me", protectMiddleware, authController.profile);
authRouter.post("/refresh", authController.refresh);
export default authRouter;