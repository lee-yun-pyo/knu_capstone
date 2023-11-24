import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { HomeItem } from "components/HomeItem";
import { UploadButton } from "components/Home/UploadButton";

import { ItemType } from "types";
import { getItmes } from "utils/item";

import { styles } from "./style";

export function Home() {
  const [items, setItems] = useState<ItemType[]>([]);

  const getItemsHandler = async () => {
    const fetchedItmes = await getItmes();
    setItems(fetchedItmes);
  };

  useEffect(() => {
    getItemsHandler();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <HomeItem props={item} />}
      ></FlatList>
      <UploadButton />
    </View>
  );
}
