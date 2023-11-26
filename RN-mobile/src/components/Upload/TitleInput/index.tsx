import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { UploadInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function TitleInput({ control, errors }: UploadInputProps) {
  const [isFoucsed, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>제목</Text>
      <Controller
        control={control}
        rules={{ required: "제목을 적어주세요" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="제목"
            style={[
              commonStyle.textInput,
              errors.title && commonStyle.warningInput,
              isFoucsed && commonStyle.isFocused,
            ]}
            returnKeyType="done"
            onChangeText={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
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
