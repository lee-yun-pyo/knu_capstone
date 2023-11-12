import { View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { DetailScreenProps } from "types";
import { calculateDaysAgo } from "utils";

import { styles } from "./style";

interface Props {
  props: {
    board_id: number;
    store_name: string;
    store_location: string;
    product_name: string;
    product_description: string;
    current_price: number;
    upper_limit: number;
    lower_limit: number;
    like_count: number;
    start_time: string;
    end_time: string;
    product_image: string[];
    latitude: number;
    longitude: number;
  };
}

export function HomeItem({ props }: Props) {
  const navigation = useNavigation<DetailScreenProps["navigation"]>();
  const {
    product_name,
    store_location,
    start_time,
    current_price,
    upper_limit,
    product_image,
  } = props;

  const daysAgo = calculateDaysAgo(start_time);

  const handleItemPress = () => {
    navigation.navigate("Detail", { info: props });
  };
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#F2F4F6" : "white",
        },
      ]}
      onPress={handleItemPress}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: product_image[0],
          }}
          style={styles.image}
        />
        <View style={styles.wrapper}>
          <Text style={styles.title}>{product_name}</Text>
          <Text style={styles.location}>
            {store_location} · {daysAgo}
          </Text>
          <View style={styles.priceBox}>
            <View style={styles.priceView}>
              <Ionicons name="pricetag-outline" size={17} color="#A4A5A1" />
              <Text style={styles.price}>{current_price}원</Text>
            </View>
            <View style={styles.priceView}>
              <MaterialCommunityIcons
                name="arrow-collapse-up"
                size={16}
                color="#D04941"
              />
              <Text style={[styles.price, styles.upperPrice]}>
                {upper_limit}원
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
