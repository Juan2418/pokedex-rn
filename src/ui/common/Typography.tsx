import { Text, type AccessibilityProps, type TextProps } from "react-native";

import { tw } from "~/utils";

const typographyVariants = {
  xs: "text-xs",
  small: "text-sm",
  base: "text-base",
  large: "text-lg",
  xl: "text-xl",
} as const;

export type TypographyVariant = keyof typeof typographyVariants;

export const typographyTypes = ["title", "regular"] as const;
export type TypographyType = (typeof typographyTypes)[number];

export interface TypographyProps extends TextProps, AccessibilityProps {
  children: React.ReactNode;
  font?: "Inter-Regular" | "Inter-Medium" | "Inter-SemiBold" | "Inter-Bold";
  variant?: TypographyVariant;
  style?: TextProps["style"];
}

export const Typography = ({
  children,
  className,
  variant = "base",
  font = "Inter-Regular",
  style = {},
  ...props
}: TypographyProps) => (
  <Text
    style={[{ fontFamily: font }, style]}
    className={tw("tracking-normal", typographyVariants[variant], className)}
    {...props}
  >
    {children}
  </Text>
);
