import { StyleSheet } from "react-native";
import { Border, FontColor } from "constant/color";

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  input: {
    paddingVertical: 10,
    fontSize: 16,
    borderBottomColor: Border.BOX_BORDER,
    borderBottomWidth: 1.4,
  },
  warningMessage: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    color: FontColor.WARNNING,
  },
  warningInput: {
    borderBottomColor: FontColor.WARNNING,
    borderBottomWidth: 1.4,
  },
});
