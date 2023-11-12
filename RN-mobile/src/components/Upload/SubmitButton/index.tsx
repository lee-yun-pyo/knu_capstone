import { View, Text, Pressable } from "react-native";
import { UseFormHandleSubmit } from "react-hook-form";

import { FormData } from "types";

import { styles } from "./style";

interface Props {
  handleSubmit: UseFormHandleSubmit<FormData, undefined>;
  onSubmit: (data: FormData) => void;
}

export function SubmitButton({ handleSubmit, onSubmit }: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btnText}>작성 완료</Text>
      </Pressable>
    </View>
  );
}
