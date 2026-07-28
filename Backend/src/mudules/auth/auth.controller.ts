import { Request, Response } from "express";
import authService from "./auth.service.js";
import { env } from "../../config/env.js";

class authController {
  register = async (req: Request, res: Response) => {
    const user = await authService.register(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
    });
  };

  login = async (req: Request, res: Response) => {
    const { accessToken, refreshToken, user } = await authService.login(
      req.body,
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "LoggedIn successfully.",
      data: {
        user,
        accessToken,
      },
    });
  };
}

export default new authController();
