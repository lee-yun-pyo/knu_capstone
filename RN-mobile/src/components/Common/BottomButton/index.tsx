import { Pressable, View, Text } from "react-native";

import { styles } from "./style";

interface Props {
  content: string;
  onPress: () => void;
}

export function BottomButton({ content, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </Pressable>
  );
}
