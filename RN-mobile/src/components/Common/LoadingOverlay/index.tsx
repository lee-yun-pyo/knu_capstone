import { Text, View, ActivityIndicator } from "react-native";

import { styles } from "./style";

interface Props {
  message: string;
}

export function LoadingOverlay({ message }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
