import { useContext, useState } from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { TitleInput } from "components/Upload/TitleInput";
import { DescriptionInput } from "components/Upload/DescriptionInput";
import { PriceInput } from "components/Upload/PriceInput";
import { EndTimeInput } from "components/Upload/EndTimeInput";
import { SubmitButton } from "components/Common/SubmitButton";
import { ImagePicker } from "components/Upload/ImagePicker";
import { LoadingOverlay } from "components/Common/LoadingOverlay";

import { HomeScreenProps, UploadFormData } from "types";
import { uploadItem } from "utils/item";

import { AuthContext } from "store/auth-context";

import { styles } from "./style";

export function Upload() {
  const [isUploading, setIsUploading] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigation = useNavigation<HomeScreenProps["navigation"]>();
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<UploadFormData>({
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

  const onSubmit = async (data: UploadFormData) => {
    setIsUploading(true);

    const response = await uploadItem(authCtx.userInfo, data);
    if (response.statusCode === 200) {
      navigation.replace("Tab");
    }
  };

  if (isUploading) {
    return <LoadingOverlay message="업로드 중..." />;
  }

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
        <SubmitButton<UploadFormData>
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          content="작성완료"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
