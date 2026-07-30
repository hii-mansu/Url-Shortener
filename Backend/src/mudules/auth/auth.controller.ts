import { Request, Response } from "express";
import authService from "./auth.service.js";
import { env } from "../../config/env.js";
import { UnauthorizedError } from "../../errors/UnauthorizedError.js";

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

  profile = async (req: Request, res: Response) => {
    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully.",
      data: req.user,
    });
  };

  refresh = async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      throw new UnauthorizedError("Anauthorized, login again.");
    }
    const { user, accessToken } = await authService.refresh(refreshToken);
    return res.status(200).json({
      success: true,
      message: "Access token refreshed successfully.",
      data: {
        user,
        accessToken,
      },
    });
  };

logout = async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        throw new UnauthorizedError("Authentication required.");
    }

    await authService.logout(refreshToken);

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "lax",
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully.",
    });
};
}
export default new authController();
