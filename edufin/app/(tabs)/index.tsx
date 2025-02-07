import {Animated, Pressable, Text, View} from 'react-native';
import { router} from 'expo-router';
import React from "react";
import HeadSection from "@/features/home/sections/HeadSection";
import InvestListSection from "@/features/home/sections/InvestListSection";
import ScrollView = Animated.ScrollView;

export default function Index() {
  
  const onPressHandler = () => {
    router.push('/invest');
  }
  
  return (
    <ScrollView className="flex-1 items-center">
      <HeadSection />
      <InvestListSection />
    </ScrollView>
  );
}