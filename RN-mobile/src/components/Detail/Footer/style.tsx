import { BackGroundColor, Border, FontColor } from "constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderStyle: "solid",
    borderColor: Border.LIGHT_MODE,
    borderTopWidth: 1,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartIcon: {
    marginRight: 15,
  },
  textView: {
    gap: 5,
    paddingLeft: 15,
    borderStyle: "solid",
    borderColor: Border.LIGHT_MODE,
    borderLeftWidth: 1,
  },
  title: {
    fontSize: 14,
    color: FontColor.gray,
  },
  price: {
    fontSize: 17,
    fontWeight: "500",
  },
  bidButton: {
    borderRadius: 8,
    backgroundColor: BackGroundColor.GREEN,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
