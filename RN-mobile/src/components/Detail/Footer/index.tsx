import { useEffect, useState, useContext } from "react";
import { View, Text, Pressable, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { BackGroundColor, Etc } from "constant/color";
import { BidScreenProps } from "types";
import { isExpiredDate } from "utils";

import { AuthContext } from "store/auth-context";

import { styles } from "./style";

import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

interface Props {
  currentPrice: number;
  upperPrice: number;
  lowerPrice: number;
  deadLineTime: string;
  boardId: number;
  isClosed: boolean;
}

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    };
  },
});

export function Footer({
  currentPrice,
  upperPrice,
  lowerPrice,
  deadLineTime,
  boardId,
  isClosed,
}: Props) {
  const navigation = useNavigation<BidScreenProps["navigation"]>();
  const [iconName, setIconName] = useState<"hearto" | "heart">("hearto");
  const [isClosedByTime, setIsClosedByTime] = useState(false);
  const [isClosedByBid, setIsClosedByBid] = useState(false);
  const authCtx = useContext(AuthContext);

  const handleClickLike = async () => {
    Haptics.selectionAsync();
    // setIconName("heart");
    await getNotificationPermission();
    await Notifications.scheduleNotificationAsync({
      identifier: uuidv4(),
      content: {
        title: "알림 제목",
        body: "알림 내용",
        data: { data: "알림 데이타" },
      },
      trigger: { seconds: 1 },
    });
  };

  async function getNotificationPermission() {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert("알림 권한 필요", "", [
        { text: "취소", style: "cancel" },
        { text: "설정", style: "default" },
      ]);
      return;
    }

    const pushTokenData = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.DEFAULT,
      });
    }
  }

  const handleBid = () => {
    navigation.navigate("Bid", {
      currentPrice,
      upperPrice,
      lowerPrice,
      boardId,
    });
  };

  async function sendPushNotificationHandler() {
    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[K_Al-2FoQ8pdRg8R5Ts_EQ]",
        title: "제목!",
        body: "BODY",
      }),
    });
  }

  useEffect(() => {
    getNotificationPermission();
  }, []);

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
