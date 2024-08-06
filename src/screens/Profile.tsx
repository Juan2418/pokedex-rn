import { Text, View } from "react-native";

import { useAuthStore } from "~/stores/useAuthStore";
import { Button } from "~/ui";

export function Profile() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.clearUser);

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-blue-500">{user?.email}</Text>
      <Button
        title="Logout"
        classes="bg-blue-400 mt-5"
        size="lg"
        onPress={logout}
      />
    </View>
  );
}
