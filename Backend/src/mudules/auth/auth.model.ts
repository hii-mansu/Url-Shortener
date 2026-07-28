import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { IUser } from "./auth.types.js";

const userSchema = new Schema<IUser>({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    profilePicture:{
        type: String,
        required: false
    },
    refreshToken:{
        type: String,
        select: false,
    },
    emailVerified:{
        type: Boolean,
        default: false,
    },
    provider:{
        type: String,
        options: ["email", "google"],
        default: "email"
    }
},
{
    timestamps: true
});

const User = model("User", userSchema);
export default User;