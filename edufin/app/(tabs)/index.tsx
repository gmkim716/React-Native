import {Animated, Pressable, Text, View} from 'react-native';
import { router} from 'expo-router';
import React from "react";
import HeadSection from "@/features/home/sections/HeadSection";
import InvestSection from "@/features/home/sections/InvestSection";
import ScrollView = Animated.ScrollView;
import ProductSection from "@/features/home/sections/ProductSection";

export default function Index() {
  
  const onPressHandler = () => {
    router.push('/invest');
  }
  
  return (
    <ScrollView className="flex-1 items-center">
      <HeadSection />
      <InvestSection />
      <ProductSection />
      <InvestSection />
    </ScrollView>
  );
}