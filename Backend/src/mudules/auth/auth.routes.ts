import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest.js';
import { registerSchema } from './auth.validation.js';
import authController from './auth.controller.js';

const authRouter = express.Router();

authRouter.post("/register", validateRequest(registerSchema), authController.register);

export default authRouter;