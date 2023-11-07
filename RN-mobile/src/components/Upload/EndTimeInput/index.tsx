import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Entypo } from "@expo/vector-icons";

import { getFormattedDateTime } from "utils";

import { commonStyle } from "screens/Upload/style";
import { styles } from "./style";

export function EndTimeInput() {
  const today = getFormattedDateTime(String(new Date()));
  const [dateText, setDateText] = useState(today);
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
    handleShowStatus(show);
  };

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>마감 시간</Text>
      <Pressable onPress={handlePressPicker}>
        <View style={styles.buttonBox}>
          <Text style={styles.title}>날짜·시간 선택</Text>
          <View style={styles.textBox}>
            <Text style={styles.text}>{dateText}</Text>
            <View style={styles.icon}>
              <Entypo name="chevron-small-up" size={24} color="black" />
            </View>
          </View>
        </View>
      </Pressable>
      <DateTimePickerModal
        testID="dateTimePicker"
        isVisible={show}
        minimumDate={new Date()}
        mode="datetime"
        is24Hour={true}
        display="inline"
        onCancel={handlePickerCancel}
        onConfirm={handlePickerConfirm}
      />
    </View>
  );
}
