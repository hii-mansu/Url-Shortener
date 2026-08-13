import { useState } from "react";
import { LoginPayload, RegisterPayload } from "../types/auth.types";
import { loginUser, registerUser } from "../services/auth.service";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (formData: LoginPayload) => {
    try {
      setError(null);
      setLoading(true);
      await loginUser(formData);
      return true;
    } catch (error:any) {
        setError(error?.response?.data?.message || "Login failed.");
        return false;
    }finally{
        setLoading(false);
    }
  };


  const register = async(formData:RegisterPayload)=>{
    try {
        setError(null);
        setLoading(true);
        await registerUser(formData);
        return true;
    } catch (error:any) {
        setError(error?.response?.data?.message || "Registration failed.");
        return false;
    }finally{
        setLoading(false);
    }
  }
  return{
    login,
    register,
    error,
    loading
  }
}
