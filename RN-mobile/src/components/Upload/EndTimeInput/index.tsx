import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Entypo } from "@expo/vector-icons";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { getFormattedDateTime } from "utils";
import {
  FieldErrors,
  UseFormClearErrors,
  UseFormSetError,
} from "react-hook-form";
import { UploadFormData } from "types";

import { commonStyle } from "screens/Upload/style";
import { styles } from "./style";

interface Props {
  setValue: (value: string) => void;
  errors: FieldErrors<UploadFormData>;
  setError: UseFormSetError<UploadFormData>;
  clearErrors: UseFormClearErrors<UploadFormData>;
}

export function EndTimeInput({
  setValue,
  errors,
  setError,
  clearErrors,
}: Props) {
  const today = new Date();
  const oneWeekLater = new Date(today);
  const [date, setDate] = useState(today);
  const [dateText, setDateText] = useState("");
  const [show, setShow] = useState(false);

  const handleShowStatus = (status: boolean) => {
    setShow(!status);
  };

  const handlePressPicker = () => {
    handleShowStatus(show);
  };

  const handlePickerCancel = () => {
    handleShowStatus(show);
  };

  const printText = (text: string) => {
    setDateText(text);
  };

  const handlePickerConfirm = (date: Date) => {
    const pickedDate = getFormattedDateTime(String(date));
    printText(pickedDate);

    setDate(date);
    setValue(String(date));

    handleShowStatus(show);
  };

  useEffect(() => {
    if (dateText === "") {
      setError("endTime", {
        type: "required",
        message: "마감 날짜를 선택해주세요",
      });
      return;
    }

    clearErrors("endTime");
  }, [dateText]);

  return (
    <View style={commonStyle.container}>
      <View style={styles.priceLabelWrapper}>
        <Text style={commonStyle.label}>마감 시간</Text>
        <Text style={styles.subLabel}>
          {"(마감 기한: 현재로부터 7일 이내)"}
        </Text>
      </View>
      <Pressable onPress={handlePressPicker}>
        <View
          style={[styles.buttonBox, errors.endTime && commonStyle.warningInput]}
        >
          <Text style={styles.title}>날짜 시간 선택</Text>
          <View style={styles.textBox}>
            <Text style={styles.text}>{dateText}</Text>
            <View style={styles.icon}>
              <Entypo name="chevron-small-up" size={24} color="black" />
            </View>
          </View>
        </View>
      </Pressable>
      {errors.endTime?.message && (
        <ErrorMessage errorsMsg={errors.endTime.message} />
      )}
      <DateTimePickerModal
        testID="dateTimePicker"
        isVisible={show}
        minimumDate={today}
        maximumDate={new Date(oneWeekLater.setDate(today.getDate() + 7))}
        date={date}
        mode="datetime"
        is24Hour={true}
        display="inline"
        onCancel={handlePickerCancel}
        onConfirm={handlePickerConfirm}
        confirmTextIOS="확인"
        cancelTextIOS="취소"
      />
    </View>
  );
}
