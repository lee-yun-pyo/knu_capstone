import { View, Text, Pressable } from "react-native";

import { BackGroundColor } from "constants/color";

import { styles } from "./style";

interface Props {
  bidOk: boolean;
}

export function BidButton({ bidOk }: Props) {
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
      <Pressable disabled={!bidOk} onPress={() => {}}>
        <Text style={styles.bidButton}>입찰하기</Text>
      </Pressable>
    </View>
  );
}
