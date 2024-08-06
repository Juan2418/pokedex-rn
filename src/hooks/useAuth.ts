import { useMutation } from "@tanstack/react-query";

import { login } from "~/api";
import { useAuthStore } from "~/stores/useAuthStore";

export const useAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const useLogin = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.token);
    },
  });

  return {
    useLogin,
  };
};
