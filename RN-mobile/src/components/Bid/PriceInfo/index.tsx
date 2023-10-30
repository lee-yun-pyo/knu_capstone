import { View, Text } from "react-native";

import { styles } from "./style";

interface Props {
  currentPrice: number;
  lowerPrice: number;
  upperPrice: number;
}

export function PriceInfo({ currentPrice, lowerPrice, upperPrice }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>현재가</Text>
        <Text style={[styles.price, { fontSize: 25 }]}>
          {currentPrice.toLocaleString()}원
        </Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>시작가/상한가</Text>
        <Text style={[styles.price, { fontSize: 20 }]}>
          {lowerPrice.toLocaleString()}원 - {upperPrice.toLocaleString()}원
        </Text>
      </View>
    </View>
  );
}
