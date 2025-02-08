import SectionTitle from "@shared/ui/SectionTitle";
import {Text, View} from "react-native";

interface HomeInvestSummary {
  secTitle: string,
  totalVal: number,
  totalValDiff: number,
  totalValDiffRate: number,
}

export default function HomeInvestSummary( {secTitle, totalVal, totalValDiff, totalValDiffRate}: HomeInvestSummary ) {
  return (
    <View>
      <SectionTitle>{secTitle}</SectionTitle>
      <Text>{totalVal.toLocaleString()} <Text>원</Text></Text>
      <View>
        <Text>{totalValDiff.toLocaleString()}<Text>({totalValDiffRate.toLocaleString()}%)</Text></Text>
      </View>
    </View>
  )
}