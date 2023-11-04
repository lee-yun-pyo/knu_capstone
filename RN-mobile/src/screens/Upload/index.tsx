import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import { styles } from "./style";
import { WON_SYMBOL } from "constants";
import { convertToLocaleStringFromInput } from "utils";
import { FormData } from "types";
import { ErrorMessage } from "components/Common/ErrorMessage";

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
        <View style={styles.inputBox}>
          <Text style={styles.label}>제목</Text>
          <Controller
            control={control}
            rules={{ required: "제목을 적어주세요" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="제목"
                style={[styles.textInput, errors.title && styles.warningInput]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="title"
          />
          {errors.title?.message && (
            <ErrorMessage errorsMsg={errors.title.message} />
          )}
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>자세한 설명</Text>
          <Controller
            control={control}
            rules={{ required: "설명을 적어주세요" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                multiline={true}
                placeholder={
                  "게시글 내용을 작성해주세요.\n(상품에 대한 설명이면 좋아요)"
                }
                style={[
                  styles.textInput,
                  errors.description && styles.warningInput,
                  styles.textArea,
                ]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="description"
          />
          {errors.description?.message && (
            <ErrorMessage errorsMsg={errors.description?.message} />
          )}
        </View>
        <View style={styles.inputBox}>
          <View style={styles.priceLabelBox}>
            <Text style={styles.label}>가격 설정</Text>
            <Text style={styles.subLabel}>{"(단위: 100원)"}</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>시작가</Text>
            <Controller
              control={control}
              rules={{ required: "시작가를 입력해주세요" }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder={`${WON_SYMBOL} 시작가를 입력해주세요`}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  style={[
                    styles.textInput,
                    errors.lowerLimit && styles.warningInput,
                  ]}
                  onChangeText={(text) => {
                    const newText = convertToLocaleStringFromInput(text);
                    onChange(newText);
                  }}
                  onBlur={onBlur}
                  value={
                    value !== ""
                      ? `${WON_SYMBOL} ${parseInt(value).toLocaleString()}`
                      : ""
                  }
                />
              )}
              name="lowerLimit"
            />
            {errors.lowerLimit?.message && (
              <ErrorMessage errorsMsg={errors.lowerLimit.message} />
            )}
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>상한가</Text>
            <Controller
              control={control}
              rules={{ required: "상한가를 입력해주세요" }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder={`${WON_SYMBOL} 상한가를 입력해주세요`}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  style={[
                    styles.textInput,
                    errors.upperLimit && styles.warningInput,
                  ]}
                  onChangeText={(text) => {
                    const newText = convertToLocaleStringFromInput(text);
                    onChange(newText);
                  }}
                  onBlur={onBlur}
                  value={
                    value !== ""
                      ? `${WON_SYMBOL} ${parseInt(value).toLocaleString()}`
                      : ""
                  }
                />
              )}
              name="upperLimit"
            />
            {errors.upperLimit?.message && (
              <ErrorMessage errorsMsg={errors.upperLimit.message} />
            )}
          </View>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>마감 시간</Text>
        </View>
        <View style={styles.submitBtn}>
          <Pressable onPress={handleSubmit(onSubmit)}>
            <Text style={styles.btnText}>입찰하기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
