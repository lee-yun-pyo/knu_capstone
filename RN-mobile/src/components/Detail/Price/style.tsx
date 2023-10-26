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
    backgroundColor: "white",
    gap: 3,
  },

  priceText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  leftTime: {
    textAlign: "center",
    fontSize: 18,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 13,
    color: FontColor.gray,
    fontWeight: "600",
  },
});
