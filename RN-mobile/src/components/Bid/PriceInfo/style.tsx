import { StyleSheet } from "react-native";
import { FontColor } from "constant/color";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginBottom: 50,
  },
  infoBox: {
    gap: 10,
  },
  subTitle: {
    fontSize: 16,
    color: FontColor.gray,
  },
  price: {
    fontWeight: "500",
  },
});
