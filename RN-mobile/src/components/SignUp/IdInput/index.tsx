import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { SignUpInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function IdInput({ control, errors }: SignUpInputProps) {
  const [isFoucsed, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>아이디</Text>
      <Controller
        control={control}
        rules={{ required: "아이디를 입력해주세요" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="아이디"
            style={[
              commonStyle.textInput,
              errors.id && commonStyle.warningInput,
              isFoucsed && commonStyle.isFocused,
            ]}
            onChangeText={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value && value.trim()}
          />
        )}
        name="id"
      />
      {errors.id?.message && <ErrorMessage errorsMsg={errors.id.message} />}
    </View>
  );
}
