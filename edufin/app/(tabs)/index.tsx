import {Animated, StyleSheet} from 'react-native';
import {router} from 'expo-router';
import React from "react";
import HeadSection from "@/features/home/sections/HeadSection";
import InvestSection from "@/features/home/sections/InvestSection";
import ProductSection from "@/features/home/sections/ProductSection";
import ScrollView = Animated.ScrollView;

export default function Index() {
  
  const onPressHandler = () => {
    router.push('/invest');
  }
  
  return (
    <ScrollView style={style.container}>
      <HeadSection />
      <InvestSection />
      <ProductSection />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
  }
})