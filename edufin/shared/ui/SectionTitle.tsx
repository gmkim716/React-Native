import {Text} from "react-native";

export default function SectionTitle({children}: {children: string}) {
  return(
    <Text className="text-2xl font-bold">{children}</Text>
  )
}