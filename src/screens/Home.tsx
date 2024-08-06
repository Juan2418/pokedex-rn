import { View } from "react-native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "~/ui";

export function Home({
  navigation,
}: NativeStackScreenProps<ParamListBase, "Profile">) {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Button
        title="Form example"
        variant="secondary"
        onPress={() => navigation.navigate("FormExample", {})}
      />
    </View>
  );
}
