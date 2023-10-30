import { FlatList, View } from "react-native";
import { HomeItem } from "components/HomeItem";

import { styles } from "./style";

const Data = [
  {
    board_id: 1,
    store_name: "행복한 야구",
    store_location: "대전 노원구",
    product_name: "우유식빵",
    product_description: "우유가 들어간 부드러운 식빵",
    current_price: 1500,
    upper_limit: 3000,
    lower_limit: 1000,
    like_count: 0,
    start_time: "2023-10-14T22:18:43.000Z",
    end_time: "2023-11-01T00:00:00.000Z",
    product_image: [
      "https://images.unsplash.com/photo-1475440197469-e367ec8eeb19?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1563299796-b729d0af54a5?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    latitude: 37.5125,
    longitude: 127.102778,
  },
  {
    board_id: 1,
    store_name: "행복한 빵집2",
    store_location: "서울 노원구",
    product_name: "초코식빵",
    product_description: "우유가 들어간 부드러운 식빵",
    current_price: 1500,
    upper_limit: 3000,
    lower_limit: 1000,
    like_count: 0,
    start_time: "2023-10-24T10:45:43.000Z",
    end_time: "2023-11-01T00:00:00.000Z",
    product_image: [
      "https://images.unsplash.com/photo-1473976345543-9ffc928e648d?auto=format&fit=crop&q=80&w=1859&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    latitude: 37.51215,
    longitude: 127.071976,
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <HomeItem props={item} />}
      ></FlatList>
    </View>
  );
}
