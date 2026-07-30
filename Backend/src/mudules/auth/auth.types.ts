import { Types } from "mongoose";

export interface RegisterUserDto {
    name: string;
    email: string;
    password: string;
}

export interface loginUserDto{
    email: string;
    password: string;
}

export interface IUser{

    _id: Types.ObjectId;

    name: string;
    email: string;
    password: string;
    profilePicture?: string;
    refreshToken?: string;
    emailVerified: boolean;
    provider: "email" | "google";
}