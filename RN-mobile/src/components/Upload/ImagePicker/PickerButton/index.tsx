import { Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { FontColor } from "constants/color";

import { styles } from "./style";

interface Props {
  icon: "image" | "camera";
  onPress: () => void;
  text: string;
}

export function PickerButton({ icon, onPress, text }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name={icon} size={20} color={FontColor.gray} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}
