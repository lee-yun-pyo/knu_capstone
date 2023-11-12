import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
  },
  image: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
  },
  deleteButton: {
    position: "absolute",
    right: -5,
    top: -5,
    zIndex: 1,
  },
});
