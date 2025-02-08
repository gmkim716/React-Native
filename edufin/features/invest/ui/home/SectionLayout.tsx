import {View} from "react-native";
import React from "react";
import {cardStyles} from "@/features/invest/styles/home/card";

export default function SectionLayout({children}: {children: React.ReactNode}) {
  return (
    <View style={cardStyles.container}>{children}</View>
  )
}
