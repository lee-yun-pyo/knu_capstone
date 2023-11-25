import { ScrollView, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

import { ItemImages } from "components/Detail/ItemImages";
import { Profile } from "components/Detail/Profile";
import { Price } from "components/Detail/Price";
import { Description } from "components/Detail/Description";
import { Location } from "components/Detail/Location";
import { Footer } from "components/Detail/Footer";
import { BidLogs } from "components/Detail/BidLogs";

import { DetailScreenProps } from "types";

import { styles } from "./style";

export function Detail() {
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
  } = route.params.info;

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
        />
        <BidLogs
          bidders={[
            { name: "이름", bidDate: "2023-04-31", bidPrice: 2000 },
            { name: "이름2", bidDate: "2023-05-31", bidPrice: 4000 },
            { name: "이름2", bidDate: "2023-06-31", bidPrice: 3000 },
          ]}
        />
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
      />
    </View>
  );
}
