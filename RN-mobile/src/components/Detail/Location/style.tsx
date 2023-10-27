import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 100,
    marginVertical: 20,
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  locationText: {
    fontSize: 15,
  },
  location: {
    height: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});
