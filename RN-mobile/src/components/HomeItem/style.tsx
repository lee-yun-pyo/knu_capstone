import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    paddingVertical: 13,
    paddingHorizontal: 5,
    borderStyle: "solid",
    borderColor: "#E2E2E2",
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  wrapper: {
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  location: {
    fontSize: 15,
    color: "#A4A5A1",
  },
  priceBox: {
    flexDirection: "row",
    gap: 5,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  price: {
    fontSize: 17,
    fontWeight: "600",
  },
  upperPrice: {
    fontSize: 16,
  },
});
