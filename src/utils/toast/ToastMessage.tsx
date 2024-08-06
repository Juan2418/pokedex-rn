import { Pressable } from "react-native";

import { Typography } from "~/ui";
import { tw } from "../tw";

export enum ToastMessageTypes {
  SUCCESS,
  ERROR,
  INFO,
  WARNING,
}

interface ToastMessageProps {
  message: string;
  deleteToast: () => void;
  type: ToastMessageTypes;
}

const toastStyles = {
  [ToastMessageTypes.SUCCESS]: {
    borderColor: "border-primary-200",
    backgroundColor: "bg-primary-100",
    textColor: "text-primary-800",
  },
  [ToastMessageTypes.ERROR]: {
    borderColor: "border-red-200",
    backgroundColor: "bg-red-100",
    textColor: "text-red-800",
  },
  [ToastMessageTypes.INFO]: {
    borderColor: "border-gray-200",
    backgroundColor: "bg-gray-100",
    textColor: "text-gray-800",
  },
  [ToastMessageTypes.WARNING]: {
    borderColor: "border-yellow-200",
    backgroundColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
};

export const ToastMessage = ({
  message,
  deleteToast,
  type,
}: ToastMessageProps) => {
  const styles = toastStyles[type];

  return (
    <Pressable
      onPress={deleteToast}
      className={tw(
        "mx-3 my-1 flex flex-row items-center rounded-lg border  p-4",
        styles.borderColor,
        styles.backgroundColor,
      )}
    >
      <Typography
        className={tw(
          "${styles.textColor} ml-4 w-[90%] text-base",
          styles.textColor,
        )}
      >
        {message}
      </Typography>
    </Pressable>
  );
};
