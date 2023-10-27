import MapView, { Marker } from "react-native-maps";

import { styles } from "./style";

interface Props {
  latitude: number;
  longitude: number;
}

export function Map({ latitude, longitude }: Props) {
  const region = {
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <MapView initialRegion={region} style={styles.container}>
      <Marker
        title="가게이름"
        coordinate={{ latitude: region.latitude, longitude: region.longitude }}
      />
    </MapView>
  );
}
