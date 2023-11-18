import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { SignUpInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function PasswordConfirmInput({ control, errors }: SignUpInputProps) {
  const [isFoucsed, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>비밀번호 확인</Text>
      <Controller
        control={control}
        rules={{
          required: "비밀번호 확인 해주세요",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="비밀번호 확인"
            keyboardType="default"
            returnKeyType="done"
            secureTextEntry={true}
            style={[
              commonStyle.textInput,
              errors.passwordConfirm && commonStyle.warningInput,
              isFoucsed && commonStyle.isFocused,
            ]}
            onChangeText={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value && value.trim()}
          />
        )}
        name="passwordConfirm"
      />
      {errors.passwordConfirm?.message && (
        <ErrorMessage errorsMsg={errors.passwordConfirm.message} />
      )}
    </View>
  );
}
