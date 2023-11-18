import { StyleSheet } from "react-native";
import { BackGroundColor, Border, FontColor } from "constants/color";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export const commonStyle = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
  },
  textInput: {
    paddingVertical: 10,
    fontSize: 16,
    borderBottomColor: Border.BOX_BORDER,
    borderBottomWidth: 1.4,
  },
  warningInput: {
    borderBottomColor: FontColor.WARNNING,
    borderBottomWidth: 1.4,
  },
  isFocused: {
    borderBottomColor: BackGroundColor.GREEN,
  },
  textArea: {
    height: 140,
    lineHeight: 23,
  },
});
