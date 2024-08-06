import type { ReactNode } from "react";
import { View } from "react-native";

import { tw } from "~/utils";
import { Typography, type TypographyProps } from "../common/Typography";

export interface LabelProps extends Omit<TypographyProps, "children"> {
  label: ReactNode;
  error: boolean;
  containerClasses?: string;
  classes?: string;
}

export const Label = ({
  label,
  containerClasses,
  classes,
  ...props
}: LabelProps) => (
  <View className={tw("flex pb-1", containerClasses)}>
    {typeof label !== "string" ? (
      label
    ) : (
      <Typography {...props} className={tw("m-0 mr-3 text-sm", classes)}>
        {label}
      </Typography>
    )}
  </View>
);
