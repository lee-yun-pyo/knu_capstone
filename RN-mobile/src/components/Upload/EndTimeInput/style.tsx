import { StyleSheet } from "react-native";
import { Border, FontColor } from "constants/color";

export const styles = StyleSheet.create({
  buttonBox: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    backgroundColor: "white",
  },
  title: {},
  priceLabelWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  subLabel: {
    fontSize: 14,
    color: FontColor.gray,
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
  },
  division: {
    width: "100%",
    height: 1,
    backgroundColor: Border.LIGHT_MODE,
  },
  icon: {
    marginLeft: 4,
  },
});
