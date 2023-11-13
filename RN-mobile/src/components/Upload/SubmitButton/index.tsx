import { View, Text, Pressable } from "react-native";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

import { styles } from "./style";

interface Props<T extends FieldValues> {
  handleSubmit: UseFormHandleSubmit<T, undefined>;
  onSubmit: (data: T) => void;
  content: string;
}

export function SubmitButton<T extends FieldValues>({
  handleSubmit,
  onSubmit,
  content,
}: Props<T>) {
  return (
    <View style={styles.container}>
      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btnText}>{content}</Text>
      </Pressable>
    </View>
  );
}
