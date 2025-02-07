import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 bg-[#25292e] items-center justify-center">
      <Text className="text-white">홈 화면</Text>
      <Link
        href="/app/(tabs)/invest"
        className="text-xl text-white underline"
      >
        Go to Invest screen
      </Link>
    </View>
  );
}