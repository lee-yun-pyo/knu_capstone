import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { SignInInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function IdInput({ control, errors }: SignInInputProps) {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>아이디</Text>
      <Controller
        control={control}
        rules={{ required: "아이디를 입력해주세요" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={errors.id?.message || "아이디"}
            style={[
              commonStyle.textInput,
              errors.id && commonStyle.warningInput,
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value && value.trim()}
          />
        )}
        name="id"
      />
    </View>
  );
}
