import { View, Text } from "react-native";

import { styles } from "./style";
import { Timer } from "../Timer";

interface Props {
  startPrice: number;
  upperPrice: number;
  deadLineTime: string;
}

export function Price({ startPrice, upperPrice, deadLineTime }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, { flex: 2 }]}>
        <Text style={styles.subTitle}>시작가 / 상한가</Text>
        <Text style={styles.priceText}>
          <Text style={{ fontSize: 14 }}>&#8361;</Text>
          {startPrice.toLocaleString()} - {upperPrice.toLocaleString()}
        </Text>
      </View>
      <Timer deadLineTime={deadLineTime} />
    </View>
  );
}
