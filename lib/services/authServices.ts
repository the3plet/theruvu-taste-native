import axiosAPI from "@/lib/api";
import type { LoginPayload, SignupPayload, AuthResponse } from "@/constant/types/auth";

export const authService = {
  login: async (payload: LoginPayload) => {
    const { data } = await axiosAPI.post<AuthResponse>("/users/login", payload);
    return data;
  },

  signup: async (payload: SignupPayload) => {
    const { data } = await axiosAPI.post<AuthResponse>("/users/register", payload);
    return data;
  },
};
