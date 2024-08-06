import { View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import i18next from "~/i18n";
import { useAuthStore } from "~/stores/useAuthStore";
import { Button, Input, Typography } from "~/ui";

const loginDataSchema = z.object({
  email: z
    .string()
    .min(1, { message: i18next.t("en:login.email_required") })
    .email({ message: i18next.t("en:login.email_not_valid") }),
  password: z
    .string()
    .min(1, { message: i18next.t("en:login.password_required") }),
});

type LoginData = z.infer<typeof loginDataSchema>;

export function Login() {
  const { t } = useTranslation();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const { control, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginDataSchema),
    defaultValues: {
      email: "test@test.com",
      password: "123",
    },
  });

  const onSubmit = handleSubmit((data) => {
    setToken("123");
    setUser({
      id: 1,
      email: data.email,
      name: "Test User",
    });
  });

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Typography variant="xl">{t("login.login_screen")}</Typography>
      <Input label={t("login.email")} control={control} name="email" />

      <Input
        label={t("login.password")}
        control={control}
        name="password"
        secureTextEntry
      />

      <Button
        title={t("login.password")}
        variant="primary"
        classes="mb-2"
        onPress={onSubmit}
      />
    </View>
  );
}
