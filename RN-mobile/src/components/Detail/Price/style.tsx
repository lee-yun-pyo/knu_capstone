import { Border, FontColor } from "constant/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 30,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    gap: 7,
  },
  priceText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
  },
  subTitle: {
    fontSize: 13,
    color: FontColor.gray,
    fontWeight: "600",
  },
  separator: {
    width: 1,
    height: "80%",
    backgroundColor: Border.LIGHT_MODE,
  },
});
