import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useForm } from "react-hook-form";

import { TitleInput } from "components/Upload/TitleInput";
import { DescriptionInput } from "components/Upload/DescriptionInput";
import { PriceInput } from "components/Upload/PriceInput";
import { EndTimeInput } from "components/Upload/EndTimeInput";
import { SubmitButton } from "components/Upload/SubmitButton";
import { ImagePicker } from "components/Upload/ImagePicker";

import { FormData } from "types";

import { styles } from "./style";

export function Upload() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
      lowerLimit: "",
      upperLimit: "",
      endTime: "",
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container}>
        <ImagePicker />
        <TitleInput control={control} errors={errors} />
        <DescriptionInput control={control} errors={errors} />
        <PriceInput control={control} errors={errors} />
        <EndTimeInput />
        <SubmitButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
