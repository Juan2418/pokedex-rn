import { useState } from "react";
import { TextInput, View } from "react-native";
import type { TextInputProps } from "react-native";
import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";

import { tw } from "~/utils";
import { Typography } from "../common";

interface InputProps<T extends FieldValues> {
  classes?: string;
  containerClasses?: string;
  inputClasses?: string;
  editable?: boolean;
  label?: string;
  labelClasses?: string;
  name: Path<T>;
  handlePasswordVisibility?: () => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  control: Control<T, object>;
  requiredField?: boolean;
  fontColor?: "Primary" | "Secondary";
  showError?: boolean;
}

export const Input = <T extends FieldValues>({
  name,
  label,
  editable = true,
  labelClasses,
  inputClasses,
  containerClasses,
  control,
  handlePasswordVisibility,
  leftIcon,
  rightIcon,
  requiredField = false,
  fontColor = "Primary",
  showError = true,
  ...props
}: InputProps<T> & TextInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View className={tw("w-full", containerClasses)}>
          {label && (
            <Typography
              className={tw("mb-2 text-base text-secondary-800", labelClasses)}
            >
              {label}
              {requiredField && (
                <Typography className="text-primary-800">*</Typography>
              )}
            </Typography>
          )}

          <View
            className={tw(
              "ios:-ml-1 flex rounded-xl border-[3.5px] border-transparent",
              focused && "border-gray-500",
              !editable && "bg-charcoal-200",
            )}
          >
            <View
              className={tw(
                "w-full flex-row content-center items-center rounded-lg bg-white",
                editable && "border-[1.5px] border-gray-700",
                !editable && "border-[1.5px] border-white",
              )}
            >
              {leftIcon && <View className="ml-3">{leftIcon}</View>}

              <TextInput
                onFocus={() => setFocused(true)}
                onBlur={() => {
                  onBlur();
                  setFocused(false);
                }}
                value={value}
                onChangeText={onChange}
                editable={editable}
                className={tw(
                  "android:mx-3 ios:mx-4 w-96 flex-1 pb-3.5 pt-3 text-base",
                  fontColor === "Primary" && "text-primary-800",
                  inputClasses,
                )}
                {...props}
              />

              {rightIcon && !handlePasswordVisibility && (
                <View className="ml-3">{rightIcon}</View>
              )}
            </View>
          </View>
          {showError && (
            <Typography className="mt-1 text-red-700">
              {error ? error?.message : " "}
            </Typography>
          )}
        </View>
      )}
    />
  );
};
