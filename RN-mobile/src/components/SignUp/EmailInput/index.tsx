import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { SignUpInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function EmailInput({ control, errors }: SignUpInputProps) {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>이메일</Text>
      <Controller
        control={control}
        rules={{ required: "이메일을 입력해주세요" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="이메일"
            keyboardType="email-address"
            style={[
              commonStyle.textInput,
              errors.email && commonStyle.warningInput,
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value && value.trim()}
          />
        )}
        name="email"
      />
      {errors.email?.message && (
        <ErrorMessage errorsMsg={errors.email.message} />
      )}
    </View>
  );
}
