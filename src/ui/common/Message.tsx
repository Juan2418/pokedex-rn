import React from "react";
import type { FieldError } from "react-hook-form";

import { tw } from "~/utils";
import { Typography } from "./Typography";
import type { TypographyProps } from "./Typography";

export type FormErrorType = FieldError | undefined;

export interface MessageProps extends Omit<TypographyProps, "children"> {
  classes?: string;
  message?: string;
  error?: FormErrorType;
}

export const Message = ({ error, classes, ...props }: MessageProps) => (
  <Typography
    className={tw("block pb-1 pt-1 text-xs opacity-80", classes)}
    {...props}
  >
    {error ? error.message : "\u200b"}
  </Typography>
);
