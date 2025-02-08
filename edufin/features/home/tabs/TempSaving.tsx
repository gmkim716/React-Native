import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function TempSaving() {
  return(
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/marulab-logo.png")}
        style={styles.image}
      />
      <Text>한국투자증권 발행어음 CMA</Text>
      <Text>연 2.7%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  image: {
    width: 44,
    height: 33,
    marginLeft: 20,
  }
  
})