import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { PasswordInput } from "components/SignIn/PasswordInput";
import { SubmitButton } from "components/Common/SubmitButton";
import { LoadingOverlay } from "components/Common/LoadingOverlay";
import { EmailInput } from "components/SignIn/EmailInput";

import { SignInData } from "types";
import { SignProps } from "types/auth";
import { loginUser } from "utils/auth";

import { AuthContext } from "store/auth-context";

import { styles } from "./style";

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();

  const authCtx = useContext(AuthContext);

  const SignInHandler = async ({ email, password }: SignProps) => {
    setIsAuthenticating(true);

    try {
      const token = await loginUser({ email, password });
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("로그인 에러", "이메일 또는 비밀번호를 확인해주세요");
      setIsAuthenticating(false);
    }
  };

  const onSubmit = (data: SignInData) => {
    const { email, password } = data;
    SignInHandler({ email, password });
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="로그인 중..." />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            source={require("../../../../assets/logo.png")}
            style={styles.image}
          />
          <Text style={styles.title}>브로콜리</Text>
        </View>
        <View>
          <EmailInput control={control} errors={errors} />
          <PasswordInput control={control} errors={errors} />
          <SubmitButton<SignInData>
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            content="로그인"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
