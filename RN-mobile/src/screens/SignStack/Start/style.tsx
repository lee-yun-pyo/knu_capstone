import { BackGroundColor, FontColor } from "constants/color";
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
  btnView: {
    paddingVertical: 17,
    width: "100%",
    backgroundColor: BackGroundColor.GREEN,
    borderRadius: 6,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
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
