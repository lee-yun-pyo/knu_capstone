import { StyleSheet } from "react-native";
import { FontColor } from "constant/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 7,
  },
  leftTime: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
  },
  subText: {
    fontSize: 18,
    lineHeight: 20,
    color: FontColor.gray,
    fontWeight: "600",
  },
});
