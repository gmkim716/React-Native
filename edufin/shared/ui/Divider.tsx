import {StyleSheet, View} from "react-native";

export default function Divider() {
  return (
    <View style={styles.divider} />
  )
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#e5e5e5',
    marginVertical: 10,
  }
})