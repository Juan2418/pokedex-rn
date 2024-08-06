import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { useUsers } from "~/hooks/useUsers";
import type { FullScreenStackParamList } from "~/navigation/types";
import { Button, Input } from "~/ui";
import { ToastMessageTypes, useToastMessageStore } from "~/utils/toast";

const formDataSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z
    .string()
    .min(1, { message: "E-mail is required." })
    .email({ message: "E-mail is not valid." }),
  country: z.string().min(1, { message: "Country is required." }),
  streetAddress: z.string().min(1, { message: "Address is required." }),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State is required." }),
  zipCode: z
    .string()
    .min(1, { message: "ZIP code is required." })
    .regex(new RegExp("^[0-9]+$"), {
      message: "ZIP code should be only numbers.",
    })
    .max(6, { message: "ZIP code should be 6 digits or less." }),
});

type FormData = z.infer<typeof formDataSchema>;

export default function FormExample({
  navigation,
}: NativeStackScreenProps<FullScreenStackParamList, "FormExample">) {
  const { useCreateUser } = useUsers();
  const pushToast = useToastMessageStore((state) => state.pushToast);

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    useCreateUser.mutate(data, {
      onSuccess: () => {
        void pushToast({
          type: ToastMessageTypes.SUCCESS,
          message: "User registered!",
        });
        reset();
      },
      onError: () => {
        void pushToast({
          type: ToastMessageTypes.ERROR,
          message: "User not registered.",
        });
      },
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="mx-4 flex flex-1 flex-col"
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input label="First name" control={control} name="firstName" />

        <Input label="Last name" control={control} name="lastName" />

        <Input label="E-mail address" control={control} name="email" />

        <Input label="Country" control={control} name="country" />

        <Input label="Street address" control={control} name="streetAddress" />

        <Input label="City" control={control} name="city" />

        <Input label="State / Province" control={control} name="state" />

        <Input label="ZIP / Postal code" control={control} name="zipCode" />

        {!useCreateUser.isPending ? (
          <Button
            title="Register"
            size="full"
            classes="mb-2"
            onPress={handleSubmit(onSubmit)}
          />
        ) : (
          <View className="mt-4 h-[32px] w-[79px] flex-row items-center justify-center rounded-md bg-green-400 p-0">
            <ActivityIndicator className="mr-3 h-3 w-3" color="white" />
          </View>
        )}

        <Button
          title="Back"
          variant="outline"
          size="full"
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
