import type { ReactNode } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";

import { tw } from "~/utils";
import { Typography } from "./Typography";

const SIZE = {
  sm: "px-3 py-2",
  md: "px-4 py-2.5",
  lg: "px-5 py-3",
  xl: "px-6 py-4",
  full: "w-full py-2",
  fit: "w-fit",
} as const;

type Size = keyof typeof SIZE;

const BUTTON_VARIANT = {
  primary: "bg-primary rounded-lg",
  secondary: "bg-secondary rounded-lg",
  outline: "border-2 border-primary-800 bg-transparent",
  transparent: "bg-transparent",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANT;

const BUTTON_VARIANT_DISABLED = {
  primary: "bg-gray-200",
  secondary: "bg-gray-500",
  outline: "border-2 border-gray-800",
  transparent: "bg-gray-200",
} as const;

export type ButtonVariantDisabled = keyof typeof BUTTON_VARIANT_DISABLED;

const BUTTON_TEXT_COLOR = {
  primary: "text-white font-semibold",
  secondary: "text-gray-200 font-semibold",
  outline: "text-primary font-semibold",
  transparent: "text-black font-semibold",
} as const;

export type ButtonTextVariant = keyof typeof BUTTON_TEXT_COLOR;

const BUTTON_TEXT_COLOR_DISABLED = {
  primary: "text-white font-semibold",
  secondary: "text-gray-200 font-semibold",
  outline: "text-gray-300 font-semibold",
  transparent: "text-black font-semibold",
} as const;

export type ButtonTextVariantDisabled = keyof typeof BUTTON_TEXT_COLOR;

export interface ButtonProps {
  title: ReactNode;
  onPress?: () => void;
  variant?: ButtonVariant;
  textStyles?: string;
  size?: Size;
  disabled?: boolean;
  classes?: string;
  leftIcon?: React.ReactNode;
  middleIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loaderColor?: string;
}

export const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  textStyles,
  classes,
  disabled = false,
  leftIcon,
  middleIcon,
  rightIcon,
  isLoading = false,
  loaderColor = "white",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={tw(
        "flex-row items-center justify-center",
        size && [SIZE[size]],
        disabled && [BUTTON_VARIANT_DISABLED[variant]],
        !disabled && [BUTTON_VARIANT[variant]],
        classes,
      )}
      disabled={isLoading || disabled}
      onPress={onPress}
    >
      <View className="flex-row items-center justify-center">
        {leftIcon}

        {middleIcon}
        {title && !isLoading && (
          <Typography
            className={tw(
              !disabled && BUTTON_TEXT_COLOR[variant],
              disabled && [BUTTON_TEXT_COLOR_DISABLED[variant]],
              textStyles,
            )}
          >
            {title}
          </Typography>
        )}
        {isLoading && (
          <ActivityIndicator className="ml-2" color={loaderColor} />
        )}

        {rightIcon}
      </View>
    </TouchableOpacity>
  );
};
