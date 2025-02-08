import {StyleSheet, View} from "react-native";
import React from "react";

export default function HomeSectionLayout({children}: {children: React.ReactNode}) {
  return (
    <View style={styles.container}>{children}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 12,
  }
})