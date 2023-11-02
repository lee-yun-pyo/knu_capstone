import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import MapView, { Marker, MarkerPressEvent } from "react-native-maps";
import * as Location from "expo-location";

import { MyLocation } from "components/Common/MyLocation";

import { REGION_DELTA } from "constants";
import { getLocationPermission } from "utils";

import { styles } from "./style";

interface currentLocationProps {
  latitude: number;
  longitude: number;
}

export function MyNear() {
  const [loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState<currentLocationProps>({
    latitude: 0,
    longitude: 0,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isPermissoin, setIsPermission] = useState(false);

  const region = {
    latitude: currentLocation.latitude,
    longitude: currentLocation.longitude,
    latitudeDelta: REGION_DELTA,
    longitudeDelta: REGION_DELTA,
  };

  const handlePressMarker = (event: MarkerPressEvent) => {
    const { action } = event.nativeEvent;
    if (action === "marker-press") {
      return;
    }
    // TO_DO: navigate 처리
  };

  const isLocationPermissionGranted = (status: string) => {
    return status === "granted";
  };

  const getLocation = async () => {
    try {
      let location = await Location.getLastKnownPositionAsync();

      if (!location) {
        location = await Location.getCurrentPositionAsync();
      }

      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
    } catch {
      setErrorMsg("위치를 찾을 수 없습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const status = await getLocationPermission();
      if (!isLocationPermissionGranted(status)) {
        // 위치 허용 안했을 때
        return;
      }
      setIsPermission(true);
      await getLocation();
    })();
  }, []);

  return loading ? (
    <View style={styles.container}>
      <Image source={require("../../../assets/rolling_loader.gif")} />
    </View>
  ) : (
    <MapView initialRegion={region} style={styles.container}>
      {isPermissoin && (
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        >
          <MyLocation />
        </Marker>
      )}
      <Marker
        title={"1"}
        coordinate={{ latitude: 36.322475, longitude: 127.403294 }}
        image={require("../../../assets/location_red.png")}
        onPress={handlePressMarker}
      />
    </MapView>
  );
}
