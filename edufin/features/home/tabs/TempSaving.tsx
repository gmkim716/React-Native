import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function TempSaving() {
  return(
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <Image
          source={require("@/assets/images/marulab-logo.png")}
          style={styles.ci}
        />
        <View style={styles.itemText}>
          <Text>한국투자증권 발행어음 CMA</Text>
          <Text>연 2.7%</Text>
        </View>
      </View>
      <View style={styles.itemRight}>
        <Image
          source={require('@/assets/images/marulab-logo.png')}
          style={styles.like}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: 'white',
  },
  itemLeft: {
    display: "flex",
    flexDirection: "row",
  },
  itemText: {
    display: "flex",
    flexDirection: "column",
  },
  itemRight: {
  
  },
  ci: {
    width: 44,
    height: 33,
    marginLeft: 20,
  },
  like: {
    width: 40,
    height: 40,
  }
})