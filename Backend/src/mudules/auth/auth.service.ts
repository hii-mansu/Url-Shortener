import { env } from "../../config/env.js";
import { ConflictError } from "../../errors/ConflictError.js";
import authRepository from "./auth.repository.js";
import { loginUserDto, RegisterUserDto } from "./auth.types.js";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { UnauthorizedError } from "../../errors/UnauthorizedError.js";
import { generateAccessToken, generateRefreshToken } from "../../shared/utils/jwt.js";
import { hashToken } from "../../shared/utils/crypto.js";


class authService{
    async register(userData:RegisterUserDto){
        const existUser = await authRepository.findByEmail(userData.email);

        if(existUser){
            throw new ConflictError("User already exist with this email.");
        };
        const hashPass = await bcrypt.hash(userData.password, 10);

        const user = await authRepository.create({
            ...userData,
            password: hashPass
        });
        return user;
    }

    async login(userData:loginUserDto){
        const user = await authRepository.findByEmailWithPassword(userData.email);
        if(!user){
            throw new UnauthorizedError("User not found.");
        }
        const isPassValid = await bcrypt.compare(userData.password, user.password);
        if(!isPassValid){
            throw new UnauthorizedError("Invalid email or password.");
        }

        const accessToken = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id);

        const hashRefToken = hashToken(refreshToken);

        user.refreshToken=hashRefToken;
        await user.save();

    const userObject = user.toObject();
    const { refreshToken: _, password:__, ...safeUser } = userObject;

        return {
            accessToken,
            refreshToken,
            user:safeUser,
        }
    }
};

export default new authService();