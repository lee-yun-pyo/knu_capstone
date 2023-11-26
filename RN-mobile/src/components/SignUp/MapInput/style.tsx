import { StyleSheet } from "react-native";
import { Border, FontColor } from "constant/color";

export const styles = StyleSheet.create({
  mapPreview: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 5,
    overflow: "hidden",
    borderColor: Border.BOX_BORDER,
    borderWidth: 1,
  },
  mapTextView: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  mapText: {
    fontSize: 17,
    textAlign: "center",
    color: FontColor.gray,
    fontWeight: "500",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});
