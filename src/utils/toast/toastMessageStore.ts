import uuid from "react-native-uuid";
import { create } from "zustand";

import { asyncTimeout } from "../asyncTimeout";

export enum ToastMessageTypes {
  SUCCESS,
  ERROR,
  INFO,
  WARNING,
}

export interface ToastMessage {
  id: string;
  type: ToastMessageTypes;
  message: string;
  timestamp: number; // date.now()
  duration: number; // in ms
}

export interface ToastMessageStore {
  toasts: ToastMessage[];
  pushToast: (newToast: Partial<ToastMessage>) => Promise<void>;
  deleteToast: (id: string) => void;
}

export const useToastMessageStore = create<ToastMessageStore>((set, get) => ({
  toasts: [],
  pushToast: async (toast = {}) => {
    const newToast = {
      id: uuid.v4().toString(),
      type: ToastMessageTypes.INFO,
      message: "placeholder",
      timestamp: Date.now(),
      duration: 3000,
      ...toast,
    };

    set((state) => ({
      toasts: state.toasts.concat(newToast),
    }));

    // let's wait for duration and THEN delete this toast if it exists
    await asyncTimeout(newToast.duration);
    get().deleteToast(newToast.id);
  },
  deleteToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
