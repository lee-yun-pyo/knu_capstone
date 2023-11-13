import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
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
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      images: [],
      title: "",
      description: "",
      lowerLimit: "",
      upperLimit: "",
      endTime: "",
    },
  });

  const handleImagesValue = (value: string[]) => {
    setValue("images", value);
  };

  const handleEndTimeValue = (value: string) => {
    setValue("endTime", value);
  };

  const onSubmit = (data: FormData) => {
    Alert.alert("data", JSON.stringify(data));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <ImagePicker setValue={handleImagesValue} />
        <TitleInput control={control} errors={errors} />
        <DescriptionInput control={control} errors={errors} />
        <PriceInput control={control} errors={errors} />
        <EndTimeInput
          setValue={handleEndTimeValue}
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
        />
        <SubmitButton<FormData>
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          content="작성완료"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
