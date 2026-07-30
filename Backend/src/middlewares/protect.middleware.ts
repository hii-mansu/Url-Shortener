import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../shared/utils/jwt.js";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";
import authRepository from "../mudules/auth/auth.repository.js";

      
export const protectMiddleware = async(req: Request, res: Response, next: NextFunction)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new UnauthorizedError("Unauthrized.");
    }
    const token = authHeader.split(" ")[1];
    const payload = verifyAccessToken(token);

    const user = await authRepository.findById(payload.userId);

    if(!user){
        throw new UnauthorizedError("Unauthorized user.");
    };

    req.user=user;
    return next();
}