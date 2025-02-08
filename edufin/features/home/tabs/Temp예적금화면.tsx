import {Image, Text, View} from "react-native";
import React from "react";

export default function Temp예적금화면() {
  return(
    <View>
      <Image
        source={require("@/assets/images/marulab-logo.png")}
        style={{width: 44, height: 33, marginLeft: 20}}
      />
      <Text>한국투자증권 발행어음 CMA</Text>
      <Text>연 2.7%</Text>
    </View>
  )
}
