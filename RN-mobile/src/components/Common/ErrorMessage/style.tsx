import { StyleSheet } from "react-native";
import { FontColor } from "constants/color";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  errorMsg: {
    fontSize: 14,
    fontWeight: "500",
    color: FontColor.WARNNING,
    alignItems: "center",
  },
});
