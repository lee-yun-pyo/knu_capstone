import { BackGroundColor, FontColor } from "constant/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageWrapper: {
    alignItems: "center",
    gap: 20,
  },
  imageTextView: {
    gap: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 18,
  },
  btnWrapper: {
    width: "100%",
    gap: 8,
  },
  signInText: {
    fontSize: 15,
    fontWeight: "500",
    color: FontColor.gray,
    textAlign: "center",
  },
  signInBtn: {
    fontWeight: "600",
    color: BackGroundColor.GREEN,
    marginLeft: 6,
  },
});
