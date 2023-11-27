import { View, Text, Pressable } from "react-native";

import { BackGroundColor } from "constant/color";

import { styles } from "./style";

interface Props {
  bidOk: boolean;
  onPressHandler: () => void;
}

export function BidButton({ bidOk, onPressHandler }: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bidOk
            ? BackGroundColor.GREEN
            : BackGroundColor.NON_ACTIVE_BUTTON,
        },
      ]}
    >
      <Pressable disabled={!bidOk} onPress={onPressHandler}>
        <Text style={styles.bidButton}>입찰하기</Text>
      </Pressable>
    </View>
  );
}
