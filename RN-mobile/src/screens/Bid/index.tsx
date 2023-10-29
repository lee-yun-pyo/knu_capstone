import { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { WON_SYMBOL } from "constants";
import { BackGroundColor } from "constants/color";
import { BidScreenProps } from "types";

import { styles } from "./style";

export function Bid() {
  const [bidPrice, setBidPrice] = useState("");
  const [bidOk, setBidOk] = useState(false);
  const [warning, setWarning] = useState("");

  const route = useRoute<BidScreenProps["route"]>();
  const { currentPrice, lowerPrice, upperPrice } = route.params;
  const recommendPrice = Array.from(
    { length: 3 },
    (_, index) => currentPrice + 100 * (index + 1)
  );

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
      <View style={styles.infoWrapper}>
        <View style={styles.infoBox}>
          <Text style={styles.subTitle}>현재가</Text>
          <Text style={[styles.price, { fontSize: 25 }]}>
            {currentPrice.toLocaleString()}원
          </Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.subTitle}>시작가/상한가</Text>
          <Text style={[styles.price, { fontSize: 20 }]}>
            {lowerPrice.toLocaleString()}원 - {upperPrice.toLocaleString()}원
          </Text>
        </View>
      </View>
      <View style={styles.bidWrapper}>
        <View style={styles.recommendPriceView}>
          {recommendPrice.map((price, index) => (
            <View
              key={index}
              style={[
                styles.recommendPriceTextView,
                parseInt(bidPrice) === price && styles.selectedPrice,
              ]}
            >
              <Pressable onPress={() => selectBidPrice(price)}>
                <Text style={styles.recommendPriceText}>
                  {WON_SYMBOL} {price.toLocaleString()}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
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
      <View
        style={[
          styles.bidButtonView,
          { backgroundColor: bidOk ? BackGroundColor.GREEN : "#B4B4B4" },
        ]}
      >
        <Pressable disabled={!bidOk} onPress={() => {}}>
          <Text style={styles.bidButton}>입찰하기</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
