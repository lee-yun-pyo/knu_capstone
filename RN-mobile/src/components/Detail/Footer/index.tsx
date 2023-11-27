import { useEffect, useState, useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { BackGroundColor, Etc } from "constant/color";
import { BidScreenProps } from "types";
import { isExpiredDate } from "utils";

import { AuthContext } from "store/auth-context";

import { styles } from "./style";

interface Props {
  currentPrice: number;
  upperPrice: number;
  lowerPrice: number;
  deadLineTime: string;
  boardId: number;
  isClosed: boolean;
  storeName: string;
}

export function Footer({
  currentPrice,
  upperPrice,
  lowerPrice,
  deadLineTime,
  boardId,
  isClosed,
  storeName,
}: Props) {
  const navigation = useNavigation<BidScreenProps["navigation"]>();
  const [iconName, setIconName] = useState<"hearto" | "heart">("hearto");
  const [isClosedByTime, setIsClosedByTime] = useState(false);
  const [isClosedByBid, setIsClosedByBid] = useState(false);
  const authCtx = useContext(AuthContext);

  const handleClickLike = async () => {
    Haptics.selectionAsync();
    setIconName("heart");
  };

  const handleBid = () => {
    navigation.navigate("Bid", {
      currentPrice,
      upperPrice,
      lowerPrice,
      boardId,
      storeName,
    });
  };

  useEffect(() => {
    setIsClosedByTime(isExpiredDate(deadLineTime));
    setIsClosedByBid(isClosed);
    // TO DO: 렌더링 시 좋아요 색 결정
  }, [isExpiredDate, isClosed]);

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
      {authCtx.userInfo.role === "Buyer" && (
        <View
          style={[
            styles.bidButton,
            {
              backgroundColor:
                isClosedByTime || isClosedByBid
                  ? BackGroundColor.NON_ACTIVE_BUTTON
                  : BackGroundColor.GREEN,
            },
          ]}
        >
          <Pressable
            disabled={isClosedByTime || isClosedByBid}
            onPress={handleBid}
          >
            <Text style={styles.buttonText}>
              {isClosedByTime
                ? "마감"
                : isClosedByBid
                ? "상한가 낙찰 완료"
                : "입찰하기"}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
