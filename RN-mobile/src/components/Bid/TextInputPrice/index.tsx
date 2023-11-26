import { View, Text, TextInput } from "react-native";

import { WON_SYMBOL } from "constant";

import { styles } from "./style";

interface Props {
  currentPrice: number;
  warning: string;
  bidPrice: string;
  onChangeText: (text: string) => void;
}

export function TextInputPrice({
  currentPrice,
  warning,
  bidPrice,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        returnKeyType="done"
        placeholder={`${WON_SYMBOL} ${currentPrice.toLocaleString()}원 이상의 가격을 입력해주세요.`}
        style={[styles.input, warning !== "" && styles.warningInput]}
        value={
          bidPrice !== ""
            ? `${WON_SYMBOL} ${parseInt(bidPrice).toLocaleString()}`
            : ""
        }
        onChangeText={onChangeText}
      />
      {warning !== "" && <Text style={styles.warningMessage}>{warning}</Text>}
    </View>
  );
}
