import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { SignUpInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function PasswordInput({ control, errors }: SignUpInputProps) {
  const [isFoucsed, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View>
      <View style={commonStyle.container}>
        <Text style={commonStyle.label}>비밀번호</Text>
        <Controller
          control={control}
          rules={{ required: "비밀번호를 입력해주세요" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="비밀번호"
              keyboardType="default"
              returnKeyType="done"
              secureTextEntry={true}
              style={[
                commonStyle.textInput,
                errors.password && commonStyle.warningInput,
                isFoucsed && commonStyle.isFocused,
              ]}
              onChangeText={onChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={value && value.trim()}
            />
          )}
          name="password"
        />
        {errors.password?.message && (
          <ErrorMessage errorsMsg={errors.password.message} />
        )}
      </View>
    </View>
  );
}
