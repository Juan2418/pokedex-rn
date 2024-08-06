import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface UserStoreState {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create(
  persist<UserStoreState>(
    (set) => ({
      user: null,
      token: null,
      setUser: (user: User | null) => {
        set(() => ({ user }));
      },
      setToken: (token: string | null) => {
        set(() => ({ token }));
      },
      clearUser: () => {
        set({ user: null, token: null });
      },
    }),
    {
      name: "authStore",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
