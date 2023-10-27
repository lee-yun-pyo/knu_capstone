import { FlatList, View } from "react-native";
import { HomeItem } from "components/HomeItem";

import { styles } from "./style";

const Data = [
  {
    board_id: 1,
    store_name: "행복한 빵집1",
    store_location: "대전 노원구",
    product_name: "우유식빵",
    product_description: "우유가 들어간 부드러운 식빵",
    current_price: 1500,
    upper_limit: 3000,
    lower_limit: 1000,
    like_count: 0,
    start_time: "2023-10-14T22:18:43.000Z",
    end_time: "2023-11-01T00:00:00.000Z",
    product_image: ["null"],
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
    product_image: ["asdf", "asdf"],
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
