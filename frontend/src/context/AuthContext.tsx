"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { AuthUser, LoginPayload, RegisterPayload } from "../types/auth.types";

import {
  getCurrentUser,
  loginUser,
  refreshAccessToken,
  registerUser,
} from "../services/auth.service";
import { setAccessToken } from "../lib/token";

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;

  login: (formData: LoginPayload) => Promise<boolean>;
  register: (formData: RegisterPayload) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (formData: LoginPayload) => {
    try {
      setLoading(true);

      const response = await loginUser(formData);
      setAccessToken(response.data.accessToken);
      setUser(response.data.user);

      return true;
    } catch (error) {
      console.error("Login failed:", error);

      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData: RegisterPayload) => {
    try {
      setLoading(true);

      const response = await registerUser(formData);

      //setUser(response.data.user);

      return true;
    } catch (error) {
      console.error("Registration failed:", error);

      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await refreshAccessToken();

        setAccessToken(response.data.accessToken);

        const userResponse = await getCurrentUser();

        setUser(userResponse.data.user);
      } catch (error) {
        setAccessToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }

  return context;
}
