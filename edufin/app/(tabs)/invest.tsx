import {StyleSheet, Text, View} from "react-native";
import HomeStockSection from "@/features/invest/sections/home/HomeStockSection";
import HomeCoinSection from "@/features/invest/sections/home/HomeCoinSection";
import HomeDepositSection from "@/features/invest/sections/home/HomeDepositSection";

export default function InvestScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Invest Screen
      </Text>
      <HomeDepositSection />
      <HomeStockSection />
      <HomeCoinSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});