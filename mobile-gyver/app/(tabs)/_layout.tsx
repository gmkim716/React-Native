import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d", // 활성화된 탭의 색상
        // 헤더의 배경색
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false, // 헤더의 그림자 표시 여부
        headerTintColor: "#fff", // 헤더의 텍스트 색상
        // 탭 바의 배경색
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen name="about" options={{ title: "About" }} />
    </Tabs>
  );
}
