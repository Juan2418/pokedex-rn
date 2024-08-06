import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "~/screens";
import FormExample from "~/screens/FormExample";
import { useAuthStore } from "~/stores/useAuthStore";
import TabStack from "./TabNavigation";
import type { FullScreenStackParamList, RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const FullScreenStack = createNativeStackNavigator<FullScreenStackParamList>();

const Router = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!user ? (
          <RootStack.Group>
            <RootStack.Screen name="Login" component={Login} />
          </RootStack.Group>
        ) : (
          <RootStack.Group>
            <RootStack.Screen name="TabStack" component={TabStack} />
          </RootStack.Group>
        )}
        <FullScreenStack.Group>
          <FullScreenStack.Screen name="FormExample" component={FormExample} />
        </FullScreenStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
