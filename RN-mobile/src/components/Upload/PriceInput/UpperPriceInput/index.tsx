import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { UploadInputProps } from "types";
import { WARNNING_MESSAGE, WON_SYMBOL } from "constants";
import {
  convertToLocaleStringFromInput,
  formatCurrency,
  isFullfiledUnit,
} from "utils";

import { commonStyle } from "screens/Upload/style";
import { styles } from "../style";

interface UpperPriceInputProps {
  lowerPrice: string;
}

type Props = UpperPriceInputProps & UploadInputProps;

export function UpperPriceInput({ control, errors, lowerPrice }: Props) {
  const [isFoucsed, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View style={styles.priceBox}>
      <Text style={styles.priceLabel}>상한가</Text>
      <Controller
        control={control}
        rules={{
          required: "상한가를 입력해주세요",
          validate: (value) =>
            parseInt(value) > parseInt(lowerPrice)
              ? isFullfiledUnit(parseInt(value)) ||
                WARNNING_MESSAGE.UNFULLFILED_UNIT
              : "시작가보다 높게 설정해주세요",
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={`${WON_SYMBOL} 상한가를 입력해주세요`}
            keyboardType="number-pad"
            returnKeyType="done"
            style={[
              commonStyle.textInput,
              errors.upperLimit && commonStyle.warningInput,
              isFoucsed && commonStyle.isFocused,
            ]}
            onChangeText={(text) => {
              const newText = convertToLocaleStringFromInput(text);
              onChange(newText);
            }}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={formatCurrency(value)}
          />
        )}
        name="upperLimit"
      />
      {errors.upperLimit?.message && (
        <ErrorMessage errorsMsg={errors.upperLimit.message} />
      )}
    </View>
  );
}
