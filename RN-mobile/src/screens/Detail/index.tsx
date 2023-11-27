import { useState, useCallback } from "react";
import { ScrollView, View } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import { ItemImages } from "components/Detail/ItemImages";
import { Profile } from "components/Detail/Profile";
import { Price } from "components/Detail/Price";
import { Description } from "components/Detail/Description";
import { Location } from "components/Detail/Location";
import { Footer } from "components/Detail/Footer";
import { BidLogs } from "components/Detail/BidLogs";

import { DetailScreenProps, ItemType } from "types";
import { getItemById } from "utils/item";
import { isBiddingClosed } from "utils";

import { styles } from "./style";

const INITIAL_ITEM_INFO = {
  board_id: 0,
  store_name: "",
  store_location: "",
  product_name: "",
  product_description: "",
  current_price: 0,
  upper_limit: 0,
  lower_limit: 0,
  like_count: 0,
  start_time: "",
  end_time: "",
  latitude: -1,
  longitude: -1,
  images: [],
  isExpired: 0,
};

export function Detail() {
  const [itemInfo, setItemInfo] = useState<ItemType>(INITIAL_ITEM_INFO);
  const route = useRoute<DetailScreenProps["route"]>();
  const { boardId } = route.params;

  const getItemInfoById = async (id: number) => {
    const item = await getItemById(id);
    setItemInfo(item);
  };

  useFocusEffect(
    useCallback(() => {
      getItemInfoById(boardId);
    }, [boardId])
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <ItemImages imageArray={itemInfo.images} />
        <Profile
          storeName={itemInfo.store_name}
          location={itemInfo.store_location}
        />
        <Description
          title={itemInfo.product_name}
          registerDate={itemInfo.start_time}
          description={itemInfo.product_description}
        />
        <Price
          startPrice={itemInfo.lower_limit}
          upperPrice={itemInfo.upper_limit}
          deadLineTime={itemInfo.end_time}
          isClosed={isBiddingClosed(itemInfo.isExpired)}
        />
        <BidLogs boardId={boardId} />
        <Location
          latitude={itemInfo.latitude}
          longitude={itemInfo.longitude}
          location={itemInfo.store_location}
          storeName={itemInfo.store_name}
        />
      </ScrollView>
      <Footer
        currentPrice={itemInfo.current_price}
        upperPrice={itemInfo.upper_limit}
        lowerPrice={itemInfo.lower_limit}
        deadLineTime={itemInfo.end_time}
        isClosed={isBiddingClosed(itemInfo.isExpired)}
        boardId={boardId}
      />
    </View>
  );
}
