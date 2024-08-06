import { View } from "react-native";

import { ToastMessage } from "./ToastMessage";
import { useToastMessageStore } from "./toastMessageStore";

export const ToastMessageProvider = () => {
  const toasts = useToastMessageStore((state) => state.toasts);
  const deleteToast = useToastMessageStore((state) => state.deleteToast);

  return (
    <View className="absolute bottom-20 w-full flex-col-reverse">
      {toasts.reverse().map((toast) => (
        <ToastMessage
          key={toast.id}
          type={toast.type}
          message={toast.message}
          deleteToast={() => deleteToast(toast.id)}
        />
      ))}
    </View>
  );
};
