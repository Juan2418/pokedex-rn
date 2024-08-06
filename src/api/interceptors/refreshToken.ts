import { useAuthStore } from "~/stores/useAuthStore";
import type { ServiceResponse } from "../api.types";
import { privateAPI } from "../axios";

export interface UserToken {
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
}

export const refreshToken = async () => {
  const { setToken, clearUser } = useAuthStore.getState();
  let refreshWasSuccessful = false;

  try {
    const response =
      await privateAPI.post<ServiceResponse<UserToken>>("/auth/refresh");

    const { data: userToken } = response.data;
    if (!userToken.refreshToken) {
      clearUser();
    } else {
      refreshWasSuccessful = true;
      setToken(userToken.refreshToken);
    }
  } catch (error) {
    clearUser();
  }

  return refreshWasSuccessful;
};

export const MAX_AGE = 10000;
