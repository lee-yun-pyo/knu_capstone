import { useContext, useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LoadingOverlay } from "components/Common/LoadingOverlay";

import { BidScreenProps } from "types";
import { postBidLogs } from "utils/bidlog";
import { BackGroundColor } from "constant/color";

import { AuthContext } from "store/auth-context";

import { styles } from "./style";

interface Props {
  bidOk: boolean;
  boardId: number;
  bidPrice: string;
}

export function BidButton({ bidOk, boardId, bidPrice }: Props) {
  const [isBidding, setIsBidding] = useState(false);
  const navigation = useNavigation<BidScreenProps["navigation"]>();
  const authCtx = useContext(AuthContext);

  const bidHandler = async () => {
    setIsBidding(true);

    const bidInfo = {
      user: authCtx.userInfo.name,
      board_id: boardId,
      price: parseInt(bidPrice),
      bidder_image: null,
      time: new Date().toString(),
    };

    const response = await postBidLogs(bidInfo);
    if (response === 200) {
      navigation.goBack();
    }
  };

  const onPressHandler = () => {
    Alert.alert("입찰을 하시겠습니까?", undefined, [
      { text: "취소", style: "cancel" },
      { text: "입찰하기", style: "default", onPress: bidHandler },
    ]);
  };

  if (isBidding) {
    return <LoadingOverlay message="입찰 중" />;
  }

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
