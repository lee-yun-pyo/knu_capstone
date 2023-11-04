import { StyleSheet } from "react-native";
import { FontColor } from "constants/color";

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
    padding: 15,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 8,
  },
  warningInput: {
    borderColor: FontColor.WARNNING,
    borderWidth: 1,
  },
  textArea: {
    height: 140,
    lineHeight: 23,
  },
});
