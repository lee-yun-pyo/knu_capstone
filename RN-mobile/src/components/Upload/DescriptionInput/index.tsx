import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { UploadInputProps } from "types";

import { commonStyle } from "screens/Upload/style";

export function DescriptionInput({ control, errors }: UploadInputProps) {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>자세한 설명</Text>
      <Controller
        control={control}
        rules={{ required: "설명을 적어주세요" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            multiline={true}
            placeholder={
              "게시글 내용을 작성해주세요.\n(상품에 대한 설명이면 좋아요)"
            }
            style={[
              commonStyle.textInput,
              errors.description && commonStyle.warningInput,
              commonStyle.textArea,
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="description"
      />
      {errors.description?.message && (
        <ErrorMessage errorsMsg={errors.description?.message} />
      )}
    </View>
  );
}
