import { StyleSheet } from "react-native";
import { FontColor } from "constant/color";

export const styles = StyleSheet.create({
  priceLabelWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  priceInputWrapper: {
    gap: 14,
  },
  subLabel: {
    fontSize: 14,
    color: FontColor.gray,
  },
  priceBox: {
    gap: 8,
  },
  priceLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
});
