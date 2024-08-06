/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useFonts as useExpoFonts } from "expo-font";

export const useFonts = () => {
  const [fontsLoaded, fontError] = useExpoFonts({
    // Only load the fonts that you need
    "Inter-Regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),
  });
  return {
    fontsLoaded,
    fontError,
  };
};
