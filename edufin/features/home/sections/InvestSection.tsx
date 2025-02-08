import { StyleSheet, View} from "react-native";
import SectionTitle from "@/shared/ui/SectionTitle";
import MenuItem from "@/entities/home/ui/MenuItem";
import {HOME_INVEST_MENU_ITEMS} from "@/lib/constants/HomeInvestMenu";


export default function InvestSection() {

  return (
    <View style={styles.container}>
      <SectionTitle>모의투자</SectionTitle>
      <View style={styles.grid}>
        {HOME_INVEST_MENU_ITEMS.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </View>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    padding: 0
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});