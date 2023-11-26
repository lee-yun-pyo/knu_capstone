import { useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";

import { PriceInfo } from "components/Bid/PriceInfo";
import { RecommendPrice } from "components/Bid/RecommendPrice";
import { BidButton } from "components/Bid/BidButton";
import { TextInputPrice } from "components/Bid/TextInputPrice";

import { BidScreenProps } from "types";
import { WARNNING_MESSAGE } from "constant";
import { convertToLocaleStringFromInput, isFullfiledUnit } from "utils";

import { styles } from "./style";

export function Bid() {
  const [bidPrice, setBidPrice] = useState("");
  const [bidOk, setBidOk] = useState(false);
  const [warning, setWarning] = useState("");

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

  useEffect(() => {
    const { warning, bidOk } = validateBidPrice(bidPrice);
    setWarning(warning);
    setBidOk(bidOk);
  }, [bidPrice]);

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
      <BidButton
        bidOk={bidOk}
        boardId={boardId}
        bidPrice={bidPrice}
        upperPrice={upperPrice}
      />
    </KeyboardAvoidingView>
  );
}
