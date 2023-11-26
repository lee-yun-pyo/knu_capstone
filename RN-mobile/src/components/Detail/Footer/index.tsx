import { useEffect, useState } from "react";
import { View, Text, Pressable, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { BackGroundColor, Etc } from "constant/color";
import { BidScreenProps } from "types";
import { isExpiredDate } from "utils";

import { styles } from "./style";

import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

interface Props {
  currentPrice: number;
  upperPrice: number;
  lowerPrice: number;
  deadLineTime: string;
  boardId: number;
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
}: Props) {
  const navigation = useNavigation<BidScreenProps["navigation"]>();
  const [iconName, setIconName] = useState<"hearto" | "heart">("hearto");
  const [isExpired, setIsExpired] = useState(false);

  const handleClickLike = async () => {
    //Haptics.selectionAsync();
    // setIconName("heart");
    await getNotificationPermission();
    await Notifications.scheduleNotificationAsync({
      identifier: uuidv4(),
      content: {
        title: "알림 제목",
        body: "알림 내용",
        data: { data: "알림 데이타" },
      },
      trigger: { seconds: 3 },
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
    setIsExpired(isExpiredDate(deadLineTime));
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("알림 수신");
        const data = notification.request.content.data;
        console.log(data);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (res) => {
        console.log("알림 응답");
        console.log(res);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
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
