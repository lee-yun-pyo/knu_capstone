import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "types";
import { REGION_DELTA } from "constants";

import { styles } from "./style";

type MapScreenProps = NativeStackScreenProps<RootStackParamList, "Map">;

export function Map() {
  const route = useRoute<MapScreenProps["route"]>();
  const { latitude, longitude, storeName } = route.params;
  const region = {
    latitude,
    longitude,
    latitudeDelta: REGION_DELTA,
    longitudeDelta: REGION_DELTA,
  };

  return (
    <MapView initialRegion={region} style={styles.container}>
      <Marker
        title={storeName}
        coordinate={{ latitude: region.latitude, longitude: region.longitude }}
      />
    </MapView>
  );
}
