import api from "../lib/api";
import {
  AuthResponse,
  LoginPayload,
  RefreshTokenResponse,
  RegisterPayload,
  UserResponse,
} from "../types/auth.types";

export const loginUser = async (
  formData: LoginPayload
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(
    "/auth/login",
    formData
  );

  return response.data;
};

export const registerUser = async (
  formData: RegisterPayload
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(
    "/auth/register",
    formData
  );

  return response.data;
};

export const getCurrentUser = async (): Promise<UserResponse> => {
  const response = await api.get<UserResponse>("/auth/me");

  return response.data;
};

export const refreshAccessToken =
  async (): Promise<RefreshTokenResponse> => {
    const response = await api.post<RefreshTokenResponse>(
      "/auth/refresh"
    );

    return response.data;
  };


