import { View, Text } from "react-native";

import { styles } from "./style";

export function Location() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>가게 위치</Text>
        <Text style={styles.locationText}>서울 강남구</Text>
      </View>
      <View style={styles.location}></View>
    </View>
  );
}
