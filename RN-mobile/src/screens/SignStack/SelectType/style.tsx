import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "100%",
  },
  infoText: {
    fontSize: 21,
    fontWeight: "600",
  },
  buttonBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  buttonView: {
    paddingVertical: 22,
    borderRadius: 14,
    backgroundColor: "white",
    width: "50%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
});
