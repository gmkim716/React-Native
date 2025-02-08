import {Text, View} from "react-native";
import Divider from "@shared/ui/Divider";
import SectionLayout from "@/features/invest/ui/home/SectionLayout";
import InvestSummary from "@/features/invest/ui/home/InvestSummary";

interface InvestSectionProps {
  secTitle:string,
  totalVal: number,
  totalValDiff: number,
  totalValDiffRate: number,
  depositVal: number,
  itemList: React.ReactNode
}

export default function InvestSectionLayout({secTitle, totalVal, totalValDiff, totalValDiffRate, depositVal, itemList}: InvestSectionProps) {
  return (
    <SectionLayout>
      <InvestSummary secTitle={secTitle} totalVal={totalVal} totalValDiff={totalValDiff} totalValDiffRate={totalValDiffRate} />
      <Divider />
      
      <View>
        <Text>예수금</Text>
        <Text>{depositVal.toLocaleString()}<Text>원</Text></Text>
      </View>
      <Divider />
      
      <View>
        {itemList}
      </View>
    </SectionLayout>
  )
}
