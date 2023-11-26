import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  name: any;
  size: number;
  color: string;
}

export function IconButton({ onPress, name, size, color }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Entypo name={name} size={size} color={color} />
    </Pressable>
  );
}
