import { StyleSheet } from "react-native";
import { BackGroundColor } from "constant/color";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    width: "100%",
    backgroundColor: BackGroundColor.GREEN,
    borderRadius: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
});
