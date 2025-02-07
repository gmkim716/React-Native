import {Image, Pressable, Text, View} from "react-native";
import {router} from "expo-router";
import React from "react";

export default function TopSection() {
  
  const onPressHandler = () => {
    router.push('/invest');
  }
  
  return (
    <View className="w-full bg-white items-center">
      <View className="flex flex-row w-[80%] justify-between items-center">
        <View>
          <Text>꾸준한 학습으로</Text>
          <Text>금융 전문가가 </Text>
          <Text>되어보세요 </Text>
        </View>
        <View>
          <Image source={require('@/assets/images/marulab-logo.png')} />
        </View>
      </View>
      
      
      {/* Tip: button 태그를 사용하기보다는 Pressable을 사용하는 것을 권장, 유연하고 스타일링이 쉬움 */}
      <Pressable
        onPress={onPressHandler}
        className="bg-blue-500 w-[80%] py-2 px-4 rounded-lg"
      >
        <Text className="text-white">오늘의 학습 시작 🚢</Text>
      </Pressable>
    </View>
  )
}