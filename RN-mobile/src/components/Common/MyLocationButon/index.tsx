import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";

interface Props {
  onPress: () => void;
  isPermitLocation: boolean;
}

export function MyLocationButton({ onPress, isPermitLocation }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialIcons
        name={isPermitLocation ? "my-location" : "location-disabled"}
        size={26}
        color="#7f8c8d"
      />
    </Pressable>
  );
}
