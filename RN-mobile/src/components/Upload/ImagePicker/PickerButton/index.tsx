import { Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { FontColor } from "constants/color";

import { styles } from "./style";

interface Props {
  icon: "image" | "camera";
  onPress: () => void;
}

export function PickerButton({ icon, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name={icon} size={20} color={FontColor.gray} />
        <Text style={styles.text}>0/10</Text>
      </View>
    </Pressable>
  );
}
