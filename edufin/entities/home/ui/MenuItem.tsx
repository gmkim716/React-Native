import {Image, Pressable, StyleSheet, Text, View} from "react-native";

type MenuItemProps = {
  icon: any;
  label: string;
  onPress: () => void;
}

export default function MenuItem({ icon, label, onPress }: MenuItemProps) {
 return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.icon} source={icon} resizeMode="contain" />
        <Text className="mt-1 text-center">{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    width: '33.33%',
    padding: 8,
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  icon: {
    width: 48,
    height: 48
  }
});