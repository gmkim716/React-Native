import SectionTitle from "@shared/ui/SectionTitle";
import {StyleSheet, Text, View} from "react-native";

interface HomeInvestSummaryProps {
  secTitle: string,
  totalVal: number,
  totalValDiff: number,
  totalValDiffRate: number,
}

export default function HomeInvestSummary( {secTitle, totalVal, totalValDiff, totalValDiffRate}: HomeInvestSummaryProps ) {
  return (
    <View>
      <SectionTitle>{secTitle}</SectionTitle>
      <View style={styles.item}>
        <View>
          <Text>{totalVal.toLocaleString()} <Text>원</Text></Text>
          <View>
            <Text>{totalValDiff.toLocaleString()}<Text>({totalValDiffRate.toLocaleString()}%)</Text></Text>
          </View>
        </View>
        <View>
          <Text>
            ➕
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
})