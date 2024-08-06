import { type ReactNode } from "react";
import { View, type ViewProps } from "react-native";

import { tw } from "~/utils";

export interface BoxProps extends ViewProps {
  children: ReactNode;
  classes?: string;
}

export const Label = ({ children, classes }: BoxProps) => (
  <View className={tw("flex pb-1", classes)}>{children}</View>
);
