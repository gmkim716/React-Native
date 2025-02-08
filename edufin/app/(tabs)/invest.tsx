import {StyleSheet, Text, View} from "react-native";
import HomeStockSection from "@/features/invest/sections/home/HomeStockSection";
import HomeCoinSection from "@/features/invest/sections/home/HomeCoinSection";
import HomeInvestSummary from "@/features/invest/ui/home/HomeInvestSummary";

export default function InvestScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Invest Screen
      </Text>
      <HomeInvestSummary secTitle="예적금" totalVal={12345} totalValDiff={1332445} totalValDiffRate={12.34}
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