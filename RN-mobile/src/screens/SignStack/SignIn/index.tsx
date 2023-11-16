import { useForm } from "react-hook-form";
import { View, Image, Text } from "react-native";

import { IdInput } from "components/SignIn/IdInput";
import { PasswordInput } from "components/SignIn/PasswordInput";
import { SubmitButton } from "components/Common/SubmitButton";

import { SignInData } from "types";

import { styles } from "./style";

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();

  const onSubmit = (data: SignInData) => {
    const { id, password } = data;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.image}
        />
        <Text style={styles.title}>브로콜리</Text>
      </View>
      <View>
        <IdInput control={control} errors={errors} />
        <PasswordInput control={control} errors={errors} />
        <SubmitButton<SignInData>
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          content="로그인"
        />
      </View>
    </View>
  );
}
