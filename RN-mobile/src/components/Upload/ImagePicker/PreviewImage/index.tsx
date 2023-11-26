import { View, Image, Pressable } from "react-native";

import { XButton } from "components/Common/XButton";

import { styles } from "./style";

interface Props {
  source: string;
  onPress: (index: number) => void;
  index: number;
}

export function PreviewImage({ source, onPress, index }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: source }} />
      <Pressable style={styles.deleteButton} onPress={() => onPress(index)}>
        <XButton size={14} color="white" />
      </Pressable>
    </View>
  );
}
