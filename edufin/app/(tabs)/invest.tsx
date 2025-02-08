import {ScrollView, StyleSheet, Text, View} from "react-native";
import StockSection from "@/features/invest/sections/home/StockSection";
import CoinSection from "@/features/invest/sections/home/CoinSection";
import DepositSection from "@/features/invest/sections/home/DepositSection";
import Dashboard from "@/features/invest/sections/home/Dashboard";

export default function InvestScreen(){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.text}>
          Invest Screen
        </Text>
        <Dashboard totalVal={100000} valDiff={5000} valDiffRate={10.23} />
        <DepositSection />
        <StockSection />
        <CoinSection />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  layout: {
    display: "flex",
    gap: 12,
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});