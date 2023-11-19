import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { UploadInputProps } from "types";
import { WON_SYMBOL } from "constants";
import { convertToLocaleStringFromInput, formatCurrency } from "utils";

import { commonStyle } from "screens/Upload/style";
import { styles } from "../style";

interface UpperPriceInputProps {
  onChangeText: (value: string) => void;
}

type Props = UpperPriceInputProps & UploadInputProps;

export function LowerPriceInput({ control, errors, onChangeText }: Props) {
  const [isFoucsed, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View style={styles.priceBox}>
      <Text style={styles.priceLabel}>시작가</Text>
      <Controller
        control={control}
        rules={{ required: "시작가를 입력해주세요" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={`${WON_SYMBOL} 시작가를 입력해주세요`}
            keyboardType="number-pad"
            returnKeyType="done"
            style={[
              commonStyle.textInput,
              errors.lowerLimit && commonStyle.warningInput,
              isFoucsed && commonStyle.isFocused,
            ]}
            onChangeText={(text) => {
              const newText = convertToLocaleStringFromInput(text);
              onChangeText(newText);
              onChange(newText);
            }}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={formatCurrency(value)}
          />
        )}
        name="lowerLimit"
      />
      {errors.lowerLimit?.message && (
        <ErrorMessage errorsMsg={errors.lowerLimit.message} />
      )}
    </View>
  );
}
