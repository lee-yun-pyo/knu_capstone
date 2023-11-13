import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { SignUpInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function NameInput({ control, errors }: SignUpInputProps) {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>이름</Text>
      <Controller
        control={control}
        rules={{ required: "이름을 입력해주세요" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="이름"
            style={[
              commonStyle.textInput,
              errors.name && commonStyle.warningInput,
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value && value.trim()}
          />
        )}
        name="name"
      />
      {errors.name?.message && <ErrorMessage errorsMsg={errors.name.message} />}
    </View>
  );
}
