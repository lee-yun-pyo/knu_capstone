import { StyleSheet } from "react-native";
import { BackGroundColor, FontColor } from "constants/color";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  inputBox: {
    gap: 8,
    marginBottom: 30,
  },
  priceLabelBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
  },
  subLabel: {
    fontSize: 14,
    color: FontColor.gray,
  },
  textInput: {
    padding: 15,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 8,
  },
  textArea: {
    height: 140,
    lineHeight: 23,
  },
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  errorMsg: {
    fontSize: 14,
    fontWeight: "500",
    color: FontColor.WARNNING,
    alignItems: "center",
  },
  warningInput: {
    borderColor: FontColor.WARNNING,
    borderWidth: 1,
  },
  submitBtn: {
    paddingVertical: 14,
    backgroundColor: BackGroundColor.GREEN,
    borderRadius: 8,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  priceBox: {
    gap: 8,
  },
  priceLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
});
