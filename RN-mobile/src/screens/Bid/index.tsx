import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { PriceInfo } from "components/Bid/PriceInfo";
import { RecommendPrice } from "components/Bid/RecommendPrice";
import { BidButton } from "components/Bid/BidButton";

import { WON_SYMBOL } from "constants";
import { BidScreenProps } from "types";

import { styles } from "./style";

export function Bid() {
  const [bidPrice, setBidPrice] = useState("");
  const [bidOk, setBidOk] = useState(false);
  const [warning, setWarning] = useState("");

  const route = useRoute<BidScreenProps["route"]>();
  const { currentPrice, lowerPrice, upperPrice } = route.params;

  const handleChangePrice = (text: string) => {
    let newText = "";
    if (text.length === 1) {
      newText = text.trim().replace(/,/g, "");
    } else {
      newText = text.slice(1).trim().replace(/,/g, "");
    }
    setBidPrice(newText);
  };

  const selectBidPrice = (price: number) => {
    setBidPrice(String(price));
  };

  useEffect(() => {
    if (bidPrice === "") {
      setWarning("");
      setBidOk(false);
      return;
    }
    if (parseInt(bidPrice) > upperPrice) {
      setWarning("상한가보다 높게 입찰하실 수 없습니다");
      setBidOk(false);
      return;
    } else if (parseInt(bidPrice) < currentPrice) {
      setWarning("현재가/시작가보다 낮게 입찰하실 수 없습니다");
      setBidOk(false);
      return;
    }
    setWarning("");
    setBidOk(true);
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
      <View style={styles.bidWrapper}>
        <RecommendPrice
          currentPrice={currentPrice}
          onPressPrice={selectBidPrice}
          bidPrice={bidPrice}
        />
        <View>
          <TextInput
            keyboardType="number-pad"
            returnKeyType="done"
            placeholder={`${WON_SYMBOL} ${currentPrice.toLocaleString()}원 이상의 가격을 입력해주세요.`}
            style={[styles.input, warning !== "" && styles.warningInput]}
            value={
              bidPrice !== ""
                ? `${WON_SYMBOL} ${parseInt(bidPrice).toLocaleString()}`
                : ""
            }
            onChangeText={handleChangePrice}
          />
          {warning !== "" && <Text style={styles.warning}>{warning}</Text>}
        </View>
      </View>
      <BidButton bidOk={bidOk} />
    </KeyboardAvoidingView>
  );
}
