import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { UploadInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function TitleInput({ control, errors }: UploadInputProps) {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>제목</Text>
      <Controller
        control={control}
        rules={{ required: "제목을 적어주세요" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="제목"
            style={[
              commonStyle.textInput,
              errors.title && commonStyle.warningInput,
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title?.message && (
        <ErrorMessage errorsMsg={errors.title.message} />
      )}
    </View>
  );
}
