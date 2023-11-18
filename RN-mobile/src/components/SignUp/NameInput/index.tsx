import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { SignUpInputProps, UserType } from "types";

import { commonStyle } from "screens/Upload/style";

interface NameInputType {
  userType: UserType;
}

type Props = SignUpInputProps & NameInputType;

export function NameInput({ control, errors, userType }: Props) {
  const [isFoucsed, setIsFocused] = useState(false);

  const isSeller = (type: UserType) => {
    return type === "Seller";
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>
        {isSeller(userType) ? "가게 이름" : "이름"}
      </Text>
      <Controller
        control={control}
        rules={{
          required: `${
            isSeller(userType) ? "가게이름" : "이름"
          }을 입력해주세요`,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={isSeller(userType) ? "가게 이름" : "이름"}
            style={[
              commonStyle.textInput,
              errors.name && commonStyle.warningInput,
              isFoucsed && commonStyle.isFocused,
            ]}
            onChangeText={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value && value.trim()}
          />
        )}
        name="name"
      />
      {errors.name?.message && <ErrorMessage errorsMsg={errors.name.message} />}
    </View>
  );
}
