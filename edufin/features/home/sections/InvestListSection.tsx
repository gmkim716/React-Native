import { StyleSheet, View} from "react-native";
import SectionTitle from "@/shared/ui/SectionTitle";
import {router} from "expo-router";
import MenuItem from "@/entities/home/ui/MenuItem";


export default function InvestListSection() {
  const menuItems = [
    {icon: require('@/assets/images/marulab-logo.png'), label: '마루랩1', onPress: () => router.push('/marulab')},
    {icon: require('@/assets/images/marulab-logo.png'), label: '마루랩2', onPress: () => router.push('/marulab')},
    {icon: require('@/assets/images/marulab-logo.png'), label: '마루랩3', onPress: () => router.push('/marulab')},
    {icon: require('@/assets/images/marulab-logo.png'), label: '마루랩4', onPress: () => router.push('/marulab')},
    {icon: require('@/assets/images/marulab-logo.png'), label: '마루랩5', onPress: () => router.push('/marulab')},
    {icon: require('@/assets/images/marulab-logo.png'), label: '마루랩6', onPress: () => router.push('/marulab')},
  ]

  return (
    <View style={styles.container}>
      <SectionTitle>모의투자</SectionTitle>
      <View style={styles.grid}>
        {menuItems.map((item, index) => (
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