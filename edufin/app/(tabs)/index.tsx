import { Pressable, Text, View} from 'react-native';
import { router} from 'expo-router';
import React from "react";
import TopSection from "@/features/home/sections/TopSection";
import InvestListSection from "@/features/home/sections/InvestListSection";

export default function Index() {
  
  const onPressHandler = () => {
    router.push('/invest');
  }
  
  return (
    <View className="flex-1 bg-[#25292e] items-center">
      <TopSection />
      <InvestListSection />
    </View>
  );
}