import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { BackGroundColor, Etc } from "constants/color";
import { BidScreenProps } from "types";
import { isExpiredDate } from "utils";

import { styles } from "./style";

interface Props {
  currentPrice: number;
  upperPrice: number;
  lowerPrice: number;
  deadLineTime: string;
}

export function Footer({
  currentPrice,
  upperPrice,
  lowerPrice,
  deadLineTime,
}: Props) {
  const navigation = useNavigation<BidScreenProps["navigation"]>();
  const [iconName, setIconName] = useState<"hearto" | "heart">("hearto");
  const [isExpired, setIsExpired] = useState(false);

  const handleClickLike = () => {
    Haptics.selectionAsync();
    setIconName("heart");
  };

  const handleBid = () => {
    navigation.navigate("Bid", { currentPrice, upperPrice, lowerPrice });
  };

  useEffect(() => {
    setIsExpired(isExpiredDate(deadLineTime));
    // TO DO: 렌더링 시 좋아요 색 결정
  }, [isExpiredDate]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Pressable onPress={handleClickLike} style={styles.heartIcon}>
          <AntDesign name={iconName} size={24} color={Etc.LIKE} />
        </Pressable>
        <View style={styles.textView}>
          <Text style={styles.title}>현재가</Text>
          <Text style={styles.price}>{currentPrice.toLocaleString()}원</Text>
        </View>
      </View>
      <View
        style={[
          styles.bidButton,
          {
            backgroundColor: isExpired
              ? BackGroundColor.NON_ACTIVE_BUTTON
              : BackGroundColor.GREEN,
          },
        ]}
      >
        <Pressable disabled={isExpired} onPress={handleBid}>
          <Text style={styles.buttonText}>
            {isExpired ? "마감" : "입찰하기"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
