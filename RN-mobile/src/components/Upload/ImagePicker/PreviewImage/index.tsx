import { View, Image } from "react-native";

import { styles } from "./style";

interface Props {
  source: string;
}

export function PreviewImage({ source }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: source }} />
    </View>
  );
}
