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
  subTextView: {
    position: "absolute",
    bottom: 8,
    right: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  subText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#fff",
  },
});
