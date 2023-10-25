import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 13,
    borderStyle: "solid",
    borderColor: "#E2E2E2",
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  profileText: {
    gap: 3,
  },
  storeName: {
    fontSize: 18,
    fontWeight: "500",
  },
  location: {
    fontSize: 14,
    color: "#A4A5A1",
  },
});
