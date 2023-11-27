import { useState, useCallback, useContext } from "react";
import { FlatList, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { HomeItem } from "components/HomeItem";
import { UploadButton } from "components/Home/UploadButton";

import { ItemType } from "types";
import { getItmes } from "utils/item";

import { AuthContext } from "store/auth-context";

import { styles } from "./style";

// ✅ TO_DO 성능 최적화 (경고 발생)
// VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc. Object {
//  "contentLength": 5969,
//  "dt": 4321,
//  "prevDt": 3331,
// }

export function Home() {
  const [items, setItems] = useState<ItemType[]>([]);
  const authCtx = useContext(AuthContext);

  const getItemsHandler = async () => {
    const fetchedItmes = await getItmes();
    // 최신 순 정렬
    fetchedItmes.sort(
      (first, last) =>
        new Date(last.start_time).getTime() -
        new Date(first.start_time).getTime()
    );
    setItems(fetchedItmes);
  };

  useFocusEffect(
    useCallback(() => {
      getItemsHandler();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <HomeItem props={item} />}
      ></FlatList>
      {authCtx.userInfo?.role === "Seller" && <UploadButton />}
    </View>
  );
}
