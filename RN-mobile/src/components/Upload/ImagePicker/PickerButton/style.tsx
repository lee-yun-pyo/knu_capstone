import { StyleSheet } from "react-native";
import { Border, FontColor } from "constants/color";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: Border.LIGHT_MODE,
    borderWidth: 1,
    borderRadius: 8,
    gap: 4,
    width: 60,
    height: 60,
  },
  text: {
    fontSize: 12,
    color: FontColor.gray,
  },
});
