import { FontColor } from "constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  wrapper: {
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "white",
    gap: 3,
  },
  priceText: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 20,
  },
  subTitle: {
    fontSize: 13,
    color: FontColor.gray,
    fontWeight: "600",
  },
});
