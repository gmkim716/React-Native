import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login/index"
        options={{
          title: "로그인",
          // headerShown: false  // 헤더를 숨기고 싶다면
        }}
      />
    </Stack>
  );
}