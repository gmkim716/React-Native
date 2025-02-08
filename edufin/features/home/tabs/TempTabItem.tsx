import {Image, View} from "react-native";
import React from "react";

export default function tempTabItem() {
  return (
    <View>
      <Image
        source={require("@/assets/images/marulab-logo.png")}
        style={{width: 44, height: 33, marginLeft: 20}}
      />
    </View>
  )
}