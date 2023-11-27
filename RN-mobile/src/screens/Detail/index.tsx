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

import { DetailScreenProps } from "types";
import { getPostEnd } from "utils/bidlog";

import { styles } from "./style";

export function Detail() {
  const [isClosed, setIsClosed] = useState(false);
  const route = useRoute<DetailScreenProps["route"]>();
  const {
    store_name,
    store_location,
    product_name,
    product_description,
    current_price,
    upper_limit,
    lower_limit,
    start_time,
    end_time,
    images,
    latitude,
    longitude,
    board_id,
  } = route.params.info;

  const checkItemIsExpired = async (id: number) => {
    const isExpired = await getPostEnd(id);
    if (isExpired === 1) {
      setIsClosed(true);
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkItemIsExpired(board_id);
    }, [board_id])
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <ItemImages imageArray={images} />
        <Profile storeName={store_name} location={store_location} />
        <Description
          title={product_name}
          registerDate={start_time}
          description={product_description}
        />
        <Price
          startPrice={lower_limit}
          upperPrice={upper_limit}
          deadLineTime={end_time}
          isClosed={isClosed}
        />
        <BidLogs boardId={board_id} />
        <Location
          latitude={latitude}
          longitude={longitude}
          location={store_location}
          storeName={store_name}
        />
      </ScrollView>
      <Footer
        currentPrice={current_price}
        upperPrice={upper_limit}
        lowerPrice={lower_limit}
        deadLineTime={end_time}
        isClosed={isClosed}
        boardId={board_id}
      />
    </View>
  );
}
