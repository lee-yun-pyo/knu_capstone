import { StyleSheet } from "react-native";
import { BackGroundColor } from "constant/color";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: BackGroundColor.GREEN,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontSize: 19,
    fontWeight: "600",
    color: "white",
  },
});
