import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { UploadInputProps } from "types";
import { WON_SYMBOL } from "constants";
import { convertToLocaleStringFromInput, formatCurrency } from "utils";

import { commonStyle } from "screens/Upload/style";
import { styles } from "./style";

export function PriceInput({ control, errors }: UploadInputProps) {
  const [lowerLimit, setLowerLimit] = useState("");
  return (
    <View style={commonStyle.container}>
      <View style={styles.priceLabelWrapper}>
        <Text style={commonStyle.label}>가격 설정</Text>
        <Text style={styles.subLabel}>{"(단위: 100원)"}</Text>
      </View>
      <View style={styles.priceInputWrapper}>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>시작가</Text>
          <Controller
            control={control}
            rules={{ required: "시작가를 입력해주세요" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={`${WON_SYMBOL} 시작가를 입력해주세요`}
                keyboardType="number-pad"
                returnKeyType="done"
                style={[
                  commonStyle.textInput,
                  errors.lowerLimit && commonStyle.warningInput,
                ]}
                onChangeText={(text) => {
                  const newText = convertToLocaleStringFromInput(text);
                  setLowerLimit(newText);
                  onChange(newText);
                }}
                onBlur={onBlur}
                value={formatCurrency(value)}
              />
            )}
            name="lowerLimit"
          />
          {errors.lowerLimit?.message && (
            <ErrorMessage errorsMsg={errors.lowerLimit.message} />
          )}
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>상한가</Text>
          <Controller
            control={control}
            rules={{
              required: "상한가를 입력해주세요",
              validate: (value) =>
                parseInt(value) > parseInt(lowerLimit) ||
                "시작가보다 높게 설정해주세요",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={`${WON_SYMBOL} 상한가를 입력해주세요`}
                keyboardType="number-pad"
                returnKeyType="done"
                style={[
                  commonStyle.textInput,
                  errors.upperLimit && commonStyle.warningInput,
                ]}
                onChangeText={(text) => {
                  const newText = convertToLocaleStringFromInput(text);
                  onChange(newText);
                }}
                onBlur={onBlur}
                value={formatCurrency(value)}
              />
            )}
            name="upperLimit"
          />
          {errors.upperLimit?.message && (
            <ErrorMessage errorsMsg={errors.upperLimit.message} />
          )}
        </View>
      </View>
    </View>
  );
}
