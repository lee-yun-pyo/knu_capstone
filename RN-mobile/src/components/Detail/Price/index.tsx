import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Timer } from "../Timer";

import { WON_SYMBOL } from "constant";
import { FontColor } from "constant/color";

import { styles } from "./style";

interface Props {
  startPrice: number;
  upperPrice: number;
  deadLineTime: string;
}

export function Price({ startPrice, upperPrice, deadLineTime }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name="arrow-expand-up"
          size={20}
          color={FontColor.startPriceColor}
        />
        <Text style={styles.priceText}>
          {WON_SYMBOL} {startPrice.toLocaleString()}
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name="arrow-expand-down"
          size={20}
          color={FontColor.upperPriceColor}
        />
        <Text style={styles.priceText}>
          {WON_SYMBOL} {upperPrice.toLocaleString()}
        </Text>
      </View>
      <View style={styles.separator} />
      <Timer deadLineTime={deadLineTime} />
    </View>
  );
}
