import { View, Text, Pressable } from "react-native";

import { WON_SYMBOL } from "constants";

import { styles } from "./style";

interface Props {
  currentPrice: number;
  onPressPrice: (price: number) => void;
  bidPrice: string;
}

export function RecommendPrice({
  currentPrice,
  onPressPrice,
  bidPrice,
}: Props) {
  const recommendPrice = Array.from(
    { length: 3 },
    (_, index) => currentPrice + 100 * (index + 1)
  );
  return (
    <View style={styles.container}>
      {recommendPrice.map((price, index) => (
        <View
          key={index}
          style={[
            styles.recommendPriceTextView,
            parseInt(bidPrice) === price && styles.selectedPrice,
          ]}
        >
          <Pressable onPress={() => onPressPrice(price)}>
            <Text style={styles.recommendPriceText}>
              {WON_SYMBOL} {price.toLocaleString()}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
