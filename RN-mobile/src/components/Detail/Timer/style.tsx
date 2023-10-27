import { StyleSheet } from "react-native";
import { FontColor, Skeleton } from "constants/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "white",
    alignItems: "center",
    gap: 3,
  },
  subTitle: {
    fontSize: 13,
    color: FontColor.gray,
    fontWeight: "600",
  },
  leftTime: {
    fontSize: 18,
    lineHeight: 20,
  },
  subText: {
    fontSize: 18,
    lineHeight: 20,
    color: FontColor.gray,
    fontWeight: "600",
  },
});
