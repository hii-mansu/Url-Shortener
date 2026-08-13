import api from "../lib/api";
import { AuthResponse, LoginPayload, RegisterPayload } from "../types/auth.types";

export const loginUser = async(formData: LoginPayload): Promise<AuthResponse>=>{
    const response = await api.post<AuthResponse>("/auth/login", formData);
    return response.data;
};

export const registerUser = async(formData: RegisterPayload): Promise<AuthResponse>=>{
const response = await api.post("/auth/register", formData);
return response.data;
}