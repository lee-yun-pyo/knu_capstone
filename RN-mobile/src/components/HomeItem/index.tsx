import { View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "types";
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

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">;

export function HomeItem({ props }: Props) {
  const navigation = useNavigation<HomeScreenProps["navigation"]>();
  const {
    product_name,
    store_location,
    start_time,
    current_price,
    upper_limit,
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
            uri: "data:image/png;base64,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",
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
