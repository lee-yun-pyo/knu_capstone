import { useState, useContext } from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { NameInput } from "components/SignUp/NameInput";
import { IdInput } from "components/SignUp/IdInput";
import { EmailInput } from "components/SignUp/EmailInput";
import { PasswordInput } from "components/SignUp/PasswordInput";
import { PasswordConfirmInput } from "components/SignUp/PasswordConfirmInput";
import { SubmitButton } from "components/Common/SubmitButton";
import { MapInput } from "components/SignUp/MapInput";
import { LoadingOverlay } from "components/Common/LoadingOverlay";

import {
  LocationType,
  SignStackScreenProps,
  SignUpData,
  SignUpScreenProps,
  UserType,
} from "types";
import { SignUpProps } from "types/auth";
import { createUser } from "utils/auth";

import { styles } from "./style";

export function SignUp() {
  const route = useRoute<SignUpScreenProps["route"]>();
  const navigation = useNavigation<SignStackScreenProps["navigation"]>();
  const { type: role, pickedLocation } = route.params;
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SignUpData>();

  const isSeller = (role: UserType) => {
    return role === "Seller";
  };

  const setCoordValue = (location: LocationType) => {
    setValue("latitude", location.lat);
    setValue("longitude", location.lng);
  };

  const setAddressValue = (address: string) => {
    setValue("address", address);
  };

  const signUpHandler = async ({ role, userInfo }: SignUpProps) => {
    setIsAuthenticating(true);

    try {
      await createUser({ role, userInfo });
      navigation.replace("SignIn");
    } catch (error) {
      Alert.alert("회원가입 에러", "이메일 또는 비밀번호를 확인해주세요");
      setIsAuthenticating(false);
    }
  };

  const onSubmit = (userInfo: SignUpData) => {
    const { password, passwordConfirm } = userInfo;
    if (password !== passwordConfirm) {
      Alert.alert("비밀번호 오류", "비밀번호가 일치하지 않습니다");
      return;
    }
    signUpHandler({ role, userInfo });
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="회원 등록 중..." />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <NameInput control={control} errors={errors} userType={role} />
        {isSeller(role) && (
          <MapInput
            pickedLocation={pickedLocation}
            setCoordValue={setCoordValue}
            setAddressValue={setAddressValue}
            errors={errors}
            setError={setError}
            clearErrors={clearErrors}
          />
        )}
        <EmailInput control={control} errors={errors} />
        <IdInput control={control} errors={errors} />
        <PasswordInput control={control} errors={errors} />
        <PasswordConfirmInput control={control} errors={errors} />
        <SubmitButton<SignUpData>
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          content="회원가입"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
