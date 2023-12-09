import { View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { DetailScreenProps, ItemType } from "types";
import { calculateDaysAgo, isBiddingClosed, isExpiredDate } from "utils";
import { API_URL, apiPath } from "constant";

import { styles } from "./style";

interface Props {
  props: ItemType;
}

export function HomeItem({ props }: Props) {
  const navigation = useNavigation<DetailScreenProps["navigation"]>();
  const {
    product_name,
    store_location,
    start_time,
    current_price,
    upper_limit,
    images,
    end_time,
    isExpired,
  } = props;

  const daysAgo = calculateDaysAgo(start_time);
  const isClosed = isExpiredDate(end_time) || isBiddingClosed(isExpired);

  const handleItemPress = () => {
    navigation.navigate("Detail", { boardId: props.board_id });
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
            uri: `${API_URL}/${apiPath.imagePath(images[0])}`,
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
              <Text style={styles.price}>
                {current_price.toLocaleString()}원
              </Text>
            </View>
            <View style={styles.priceView}>
              <MaterialCommunityIcons
                name="arrow-collapse-up"
                size={16}
                color="#D04941"
              />
              <Text style={[styles.price, styles.upperPrice]}>
                {upper_limit.toLocaleString()}원
              </Text>
            </View>
          </View>
          {isClosed && (
            <View style={styles.expiredView}>
              <Text style={styles.expiredText}>마감</Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
}
