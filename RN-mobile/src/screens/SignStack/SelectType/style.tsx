import { StyleSheet } from "react-native";
import { Border } from "constant/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "100%",
  },
  infoText: {
    fontSize: 21,
    fontWeight: "600",
  },
  buttonBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  buttonView: {
    paddingVertical: 20,
    borderRadius: 34,
    backgroundColor: "white",
    width: "45%",
    borderWidth: 1.5,
    borderColor: Border.BOX_BORDER,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
});
