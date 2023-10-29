import { FontColor } from "constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  bidWrapper: {
    gap: 8,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: "white",
    borderRadius: 8,
  },
  warning: {
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
