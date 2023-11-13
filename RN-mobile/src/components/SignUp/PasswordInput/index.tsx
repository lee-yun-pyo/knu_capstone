import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { SignUpInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function PasswordInput({ control, errors }: SignUpInputProps) {
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
              ]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value && value.trim()}
            />
          )}
          name="password"
        />
        {errors.password?.message && (
          <ErrorMessage errorsMsg={errors.password.message} />
        )}
      </View>
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
              ]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value && value.trim()}
            />
          )}
          name="passwordConfirm"
        />
        {errors.passwordConfirm?.message && (
          <ErrorMessage errorsMsg={errors.passwordConfirm.message} />
        )}
      </View>
    </View>
  );
}
