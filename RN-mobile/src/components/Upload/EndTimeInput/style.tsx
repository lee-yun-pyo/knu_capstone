import { StyleSheet } from "react-native";
import { Border } from "constants/color";

export const styles = StyleSheet.create({
  buttonBox: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {},
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
