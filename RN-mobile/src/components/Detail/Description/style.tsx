import { FontColor } from "constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  date: {
    fontSize: 14,
    color: FontColor.gray,
    marginTop: 7,
    marginBottom: 20,
  },
  description: {
    fontSize: 17,
  },
});
