import { View, Text } from "react-native";

import { styles } from "./style";

interface Props {
  startPrice: number;
  upperPrice: number;
  limitTime: string;
}

export function Price({ startPrice, upperPrice, limitTime }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, { flex: 2 }]}>
        <Text style={styles.subTitle}>시작가 / 상한가</Text>
        <Text style={styles.priceText}>
          <Text style={{ fontSize: 14 }}>&#8361;</Text>
          {startPrice.toLocaleString()} - {upperPrice.toLocaleString()}
        </Text>
      </View>
      <View style={[styles.wrapper, { flex: 1 }]}>
        <Text style={styles.subTitle}>남은 시간</Text>
        <Text style={styles.leftTime}>20:23:12</Text>
      </View>
    </View>
  );
}
