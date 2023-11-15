import {
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { NameInput } from "components/SignUp/NameInput";
import { IdInput } from "components/SignUp/IdInput";
import { EmailInput } from "components/SignUp/EmailInput";
import { PasswordInput } from "components/SignUp/PasswordInput";
import { SubmitButton } from "components/Common/SubmitButton";
import { MapInput } from "components/SignUp/MapInput";

import { SignUpData, SignUpScreenProps, UserType } from "types";

import { styles } from "./style";

export function SignUp() {
  const route = useRoute<SignUpScreenProps["route"]>();
  const { type, pickedLocation } = route.params;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();

  const isSeller = (type: UserType) => {
    return type === "Seller";
  };

  const onSubmit = (data: SignUpData) => {
    const { id, name, email, password, passwordConfirm, latitude, longitude } =
      data;
    if (password !== passwordConfirm) {
      Alert.alert("비밀번호 오류", "비밀번호가 일치하지 않습니다");
      return;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <NameInput control={control} errors={errors} userType={type} />
        {isSeller(type) && <MapInput pickedLocation={pickedLocation} />}
        <EmailInput control={control} errors={errors} />
        <IdInput control={control} errors={errors} />
        <PasswordInput control={control} errors={errors} />
        <SubmitButton<SignUpData>
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          content="회원가입"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
