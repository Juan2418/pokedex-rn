import { Platform, View } from "react-native";
import type { AppStateStatus } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { focusManager, QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

import { useAppState } from "~/hooks/useAppState";
import Router from "~/navigation/Router";
import { ToastMessageProvider } from "~/utils/toast";

import "~/i18n";

import { useCallback } from "react";

import { useFonts } from "~/hooks";

void SplashScreen.preventAutoHideAsync();

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 15 * 60 * 1000, // 15 minutes cache time
      staleTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

export default function App() {
  useAppState(onAppStateChange);

  const { fontError, fontsLoaded } = useFonts();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <ToastMessageProvider />
        <Router />
      </PersistQueryClientProvider>
    </View>
  );
}
