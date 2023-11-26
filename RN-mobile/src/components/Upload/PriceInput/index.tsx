import { useState } from "react";
import { View, Text } from "react-native";

import { UploadInputProps } from "types";

import { LowerPriceInput } from "./LowerPriceInput";
import { UpperPriceInput } from "./UpperPriceInput";

import { commonStyle } from "screens/Upload/style";
import { styles } from "./style";

export function PriceInput({ control, errors }: UploadInputProps) {
  const [lowerPrice, setLowerPrice] = useState("");

  const handleChageLowerPrice = (value: string) => {
    setLowerPrice(value);
  };

  return (
    <View style={commonStyle.container}>
      <View style={styles.priceLabelWrapper}>
        <Text style={commonStyle.label}>가격 설정</Text>
        <Text style={styles.subLabel}>{"(단위: 100원)"}</Text>
      </View>
      <View style={styles.priceInputWrapper}>
        <LowerPriceInput
          control={control}
          errors={errors}
          onChangeText={handleChageLowerPrice}
        />
        <UpperPriceInput
          control={control}
          errors={errors}
          lowerPrice={lowerPrice}
        />
      </View>
    </View>
  );
}
