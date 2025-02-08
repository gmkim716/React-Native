import {Text, View} from "react-native";
import Divider from "@shared/ui/Divider";
import {cardStyles} from "@/features/invest/styles/home/card";

interface DashboardProps {
  totalVal: number,
  valDiff: number,
  valDiffRate: number,
}

export default function Dashboard({totalVal, valDiff, valDiffRate}: DashboardProps) {
  return (
    <View style={cardStyles.container}>
      <View>
        <Text>자산</Text>
        <Text>{totalVal.toLocaleString()}<Text>원</Text></Text>
      </View>
      <Divider />
      <View>
        <View>
          <Text>{valDiff.toLocaleString()}<Text>({valDiffRate.toLocaleString()})</Text></Text>
        </View>
      </View>
    </View>
  )
}
