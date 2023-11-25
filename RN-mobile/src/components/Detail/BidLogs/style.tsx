import { BackGroundColor, Border, FontColor } from "constant/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  buttonBox: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 4,
  },
  sortButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: "#e5e5e5",
  },
  sortButtonText: {
    fontSize: 15,
    color: "#000",
  },
  selectedButton: {
    backgroundColor: BackGroundColor.GREEN,
  },
  selectedButtonText: {
    color: "#fff",
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  titleLength: {
    fontSize: 15,
    color: FontColor.gray,
  },
  userWrapper: {
    height: 170,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Border.LIGHT_MODE,
    gap: 10,
    overflow: "hidden",
  },
  noBidderText: {
    fontSize: 14,
    fontWeight: "500",
    color: FontColor.gray,
  },
});
