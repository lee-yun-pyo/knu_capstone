import { Border, FontColor } from "constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  infoWrapper: {
    gap: 20,
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
  bidWrapper: {
    gap: 8,
  },
  recommendPriceView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  recommendPriceTextView: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Border.LIGHT_MODE,
  },
  recommendPriceText: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 12,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: "white",
    borderRadius: 8,
  },
  bidButtonView: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 18,
  },
  bidButton: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  warning: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    color: FontColor.WARNNING,
  },
  warningInput: {
    borderColor: FontColor.WARNNING,
    borderWidth: 1,
  },
  selectedPrice: {
    backgroundColor: Border.LIGHT_MODE,
  },
});
