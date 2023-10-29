import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { Etc } from "constants/color";
import { RootStackParamList } from "types";

import { styles } from "./style";

interface Props {
  currentPrice: number;
  upperPrice: number;
  lowerPrice: number;
}

type BidScreenProps = NativeStackScreenProps<RootStackParamList, "Bid">;

export function Footer({ currentPrice, upperPrice, lowerPrice }: Props) {
  const navigation = useNavigation<BidScreenProps["navigation"]>();
  const [iconName, setIconName] = useState<"hearto" | "heart">("hearto");
  const handleClickLike = () => {
    Haptics.selectionAsync();
    setIconName("heart");
  };

  const handleBid = () => {
    navigation.navigate("Bid", { currentPrice, upperPrice, lowerPrice });
  };

  // useEffect로 렌더링 시 좋아요 색 결정

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
      <View style={styles.bidButton}>
        <Pressable onPress={handleBid}>
          <Text style={styles.buttonText}>입찰하기</Text>
        </Pressable>
      </View>
    </View>
  );
}
