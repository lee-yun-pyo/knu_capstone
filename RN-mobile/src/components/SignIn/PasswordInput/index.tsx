import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { SignInInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function PasswordInput({ control, errors }: SignInInputProps) {
  return (
    <View>
      <View style={commonStyle.container}>
        <Text style={commonStyle.label}>비밀번호</Text>
        <Controller
          control={control}
          rules={{ required: "비밀번호를 입력해주세요" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={errors.password?.message || "비밀번호"}
              keyboardType="default"
              returnKeyType="done"
              secureTextEntry={true}
              style={[
                commonStyle.textInput,
                errors.password && commonStyle.warningInput,
              ]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value && value.trim()}
            />
          )}
          name="password"
        />
      </View>
    </View>
  );
}
