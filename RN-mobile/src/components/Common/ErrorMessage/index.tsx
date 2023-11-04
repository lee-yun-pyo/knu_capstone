import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { FontColor } from "constants/color";

import { styles } from "./style";

interface Props {
  errorsMsg: string;
}

export function ErrorMessage({ errorsMsg }: Props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error" size={17} color={FontColor.WARNNING} />
      <Text style={styles.errorMsg}>{errorsMsg}</Text>
    </View>
  );
}
