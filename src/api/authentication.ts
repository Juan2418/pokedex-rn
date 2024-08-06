import { useAuthStore, type User } from "~/stores/useAuthStore";

// import { getApi } from "./axios";

interface LoginParams {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const login = async (params: LoginParams) => {
  // const { data } = await getApi({ isPrivateApi: false }).post<LoginResponse>(
  //   "/auth/login",
  //   params,
  // );
  // return data;
  const loginData: LoginResponse = {
    token: "string",
    user: {
      id: 1,
      name: "Test User",
      email: params.email,
    },
  };

  const response: LoginResponse = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(loginData);
    }, 1000),
  );
  return response;
};

export const logout = () => {
  const { clearUser } = useAuthStore.getState();

  clearUser();
};
