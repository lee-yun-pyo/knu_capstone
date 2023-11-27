import { useState, useEffect, useContext } from "react";
import { KeyboardAvoidingView, Platform, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { PriceInfo } from "components/Bid/PriceInfo";
import { RecommendPrice } from "components/Bid/RecommendPrice";
import { BidButton } from "components/Bid/BidButton";
import { TextInputPrice } from "components/Bid/TextInputPrice";
import { LoadingOverlay } from "components/Common/LoadingOverlay";

import { BidScreenProps } from "types";
import { WARNNING_MESSAGE } from "constant";
import { convertToLocaleStringFromInput, isFullfiledUnit } from "utils";
import { postBidEnd, postBidLogs } from "utils/bidlog";

import { AuthContext } from "store/auth-context";

import { styles } from "./style";

export function Bid() {
  const [isBidding, setIsBidding] = useState(false);
  const [bidOk, setBidOk] = useState(false);
  const [bidPrice, setBidPrice] = useState("");
  const [warning, setWarning] = useState("");

  const authCtx = useContext(AuthContext);

  const navigation = useNavigation<BidScreenProps["navigation"]>();
  const route = useRoute<BidScreenProps["route"]>();
  const { currentPrice, lowerPrice, upperPrice, boardId } = route.params;

  const handleChangePrice = (text: string) => {
    const newBidPrice = convertToLocaleStringFromInput(text);
    setBidPrice(newBidPrice);
  };

  const selectBidPrice = (price: number) => {
    setBidPrice(String(price));
  };

  const validateBidPrice = (price: string) => {
    if (price === "") return { warning: "", bidOk: false };

    const numericPrice = parseInt(price);

    if (numericPrice > upperPrice) {
      return { warning: WARNNING_MESSAGE.HIGH, bidOk: false };
    } else if (numericPrice < currentPrice) {
      return { warning: WARNNING_MESSAGE.LOW, bidOk: false };
    } else if (!isFullfiledUnit(numericPrice)) {
      return { warning: WARNNING_MESSAGE.UNFULLFILED_UNIT, bidOk: false };
    }

    return { warning: "", bidOk: true };
  };

  const bidHandler = async () => {
    setIsBidding(true);

    const bidInfo = {
      user: authCtx.userInfo.name,
      board_id: boardId,
      price: parseInt(bidPrice),
      bidder_image: null,
      time: new Date().toString(),
    };

    const isBidPriceEqualToUpperPrice = () => {
      return parseInt(bidPrice) === upperPrice;
    };

    const response = await postBidLogs(bidInfo);
    if (isBidPriceEqualToUpperPrice()) {
      const result = await postBidEnd(boardId);
      // TO_DO: 푸쉬 설정
    }
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

  useEffect(() => {
    const { warning, bidOk } = validateBidPrice(bidPrice);
    setWarning(warning);
    setBidOk(bidOk);
  }, [bidPrice]);

  if (isBidding) {
    return <LoadingOverlay message="입찰 중" />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <PriceInfo
        currentPrice={currentPrice}
        lowerPrice={lowerPrice}
        upperPrice={upperPrice}
      />
      <RecommendPrice
        currentPrice={currentPrice}
        onPressPrice={selectBidPrice}
        bidPrice={bidPrice}
      />
      <TextInputPrice
        currentPrice={currentPrice}
        warning={warning}
        bidPrice={bidPrice}
        onChangeText={handleChangePrice}
      />
      <BidButton bidOk={bidOk} onPressHandler={onPressHandler} />
    </KeyboardAvoidingView>
  );
}
