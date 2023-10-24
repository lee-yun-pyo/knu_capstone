import { FlatList, Image, Pressable, Text, View } from "react-native";

import { Item } from "../../components/HomeItem";

import { styles } from "./style";

const Data = [
  {
    board_id: 1,
    store_name: "행복한 빵집",
    store_location: "서울 노원구",
    product_name: "우유식빵",
    product_description: "우유가 들어간 부드러운 식빵",
    current_price: 1500,
    upper_limit: 3000,
    lower_limit: 1000,
    like_count: 0,
    start_time: "2023-10-14T22:18:43.000Z",
    end_time: "2023-11-01T00:00:00.000Z",
    product_image: ["null"],
  },
  {
    board_id: 1,
    store_name: "행복한 빵집",
    store_location: "서울 노원구",
    product_name: "초코식빵",
    product_description: "우유가 들어간 부드러운 식빵",
    current_price: 1500,
    upper_limit: 3000,
    lower_limit: 1000,
    like_count: 0,
    start_time: "2023-10-24T10:45:43.000Z",
    end_time: "2023-11-01T00:00:00.000Z",
    product_image: ["asdf", "asdf"],
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item props={item} />}
      ></FlatList>
    </View>
  );
}
