import {Image, StyleSheet, Text, View} from "react-native";

interface ListItemProps {
  imgSource: string,
  name: string,
  curPrc: number,
  avgPrc: number,
  amount: number,
  totalPosVal: number,
  prcDiff: number,
  prcDiffRate: number
}

export default function ListItem({ imgSource, name, curPrc, avgPrc, amount, totalPosVal, prcDiff, prcDiffRate}: ListItemProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('@/assets/images/marulab-logo.png')} style={styles.ci} />
      </View>
      <View style={styles.itemInfo}>
        <View style={styles.itemRow}>
          <Text style={styles.itemLeft}>{name}</Text>
          <Text style={styles.itemRight}>{curPrc.toLocaleString()}<Text>원</Text></Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemLeft}>{avgPrc.toLocaleString()}원</Text>
          <Text style={styles.itemRight}>{amount.toLocaleString()}<Text>주</Text></Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemLeft}>{totalPosVal.toLocaleString()}원</Text>
          <Text style={styles.itemRight}>{prcDiff}({prcDiffRate.toLocaleString()}%)</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  itemInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemLeft: {
    textAlign: "left"
  },
  itemRight: {
    textAlign: "right"
  },
  ci: {
    width: 44,
    height: 44,
  }
})