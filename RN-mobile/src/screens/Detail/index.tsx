import { ScrollView, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ItemImages } from "components/Detail/ItemImages";
import { Profile } from "components/Detail/Profile";
import { Price } from "components/Detail/Price";
import { Description } from "components/Detail/Description";
import { Location } from "components/Detail/Location";
import { Footer } from "components/Detail/Footer";

import { RootStackParamList } from "types";

import { styles } from "./style";

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">;

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
    product_image,
    latitude,
    longitude,
  } = route.params.info;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <ItemImages imageArray={product_image} />
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
        <Location
          latitude={latitude}
          longitude={longitude}
          location={store_location}
          storeName={store_name}
        />
      </ScrollView>
      <Footer currentPrice={current_price} />
    </View>
  );
}
