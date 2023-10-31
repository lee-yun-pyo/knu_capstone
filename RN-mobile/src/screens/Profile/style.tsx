import { Border } from "constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 20,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Border.LIGHT_MODE,
  },
  nameWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  menuListView: {
    gap: 5,
  },
  menuList: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
  },
  menuName: {
    fontSize: 16,
  },
});
