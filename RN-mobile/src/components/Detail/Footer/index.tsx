import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { Etc } from "constants/color";

import { styles } from "./style";

interface Props {
  currentPrice: number;
}

export function Footer({ currentPrice }: Props) {
  const [iconName, setIconName] = useState<"hearto" | "heart">("hearto");
  const handleClickLike = () => {
    Haptics.selectionAsync();
    setIconName("heart");
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
        <Text style={styles.buttonText}>입찰하기</Text>
      </View>
    </View>
  );
}
