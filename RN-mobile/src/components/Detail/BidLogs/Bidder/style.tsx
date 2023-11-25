import { Border } from "constant/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f2f4f6",
    borderRadius: 10,
  },
  infoWrapper: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: Border.LIGHT_MODE,
    borderWidth: 1,
  },
  infoTextBox: {
    gap: 4,
  },
  userName: {
    fontSize: 14,
    fontWeight: "600",
  },
  bidDate: {
    fontSize: 13,
    color: "#868e96",
  },
  infoText: {
    fontSize: 14,
  },
  bidPrice: {
    fontWeight: "600",
    fontSize: 16,
  },
});
