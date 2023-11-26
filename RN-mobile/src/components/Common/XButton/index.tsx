import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";

interface Props {
  size: number;
  color: string;
}

export function XButton({ size, color }: Props) {
  return (
    <View style={styles.container}>
      <AntDesign name="close" size={size} color={color} />
    </View>
  );
}
