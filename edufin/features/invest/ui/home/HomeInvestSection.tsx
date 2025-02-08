import SectionTitle from "@shared/ui/SectionTitle";
import {Text, View} from "react-native";
import Divider from "@shared/ui/Divider";
import ListItem from "@/features/invest/ui/home/ListItem";
import HomeSectionLayout from "@/features/invest/ui/home/HomeSectionLayout";
import HomeInvestSummary from "@/features/invest/ui/home/HomeInvestSummary";

interface HomeInvestSectionProps {
  secTitle:string,
  totalVal: number,
  totalValDiff: number,
  totalValDiffRate: number,
  depositVal: number,
  itemList: React.ReactNode
}

export default function HomeInvestSeciton({secTitle, totalVal, totalValDiff, totalValDiffRate, depositVal, itemList}: HomeInvestSectionProps) {
  return (
    <HomeSectionLayout>
      <HomeInvestSummary secTitle={secTitle} totalVal={totalVal} totalValDiff={totalValDiff} totalValDiffRate={totalValDiffRate} />
      <Divider />
      
      <View>
        <Text>예수금</Text>
        <Text>{depositVal.toLocaleString()}<Text>원</Text></Text>
      </View>
      <Divider />
      
      <View>
        {itemList}
      </View>
    </HomeSectionLayout>
  )
}
