import { StyleSheet } from "react-native";
import { FontColor } from "constants/color";

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: "white",
    borderRadius: 8,
  },
  warningMessage: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    color: FontColor.WARNNING,
  },
  warningInput: {
    borderColor: FontColor.WARNNING,
    borderWidth: 1,
  },
});
