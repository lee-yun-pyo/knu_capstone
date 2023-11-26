import { StyleSheet } from "react-native";
import { Border } from "constant/color";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  recommendPriceTextView: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Border.LIGHT_MODE,
  },
  recommendPriceText: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 12,
  },
  selectedPrice: {
    backgroundColor: Border.LIGHT_MODE,
  },
});
