import { SplashScreen, Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 5000);

  // 상태 바 스타일을 변경한다
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 10);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
