import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import MapView, { Marker, MarkerPressEvent } from "react-native-maps";
import * as Location from "expo-location";

import { MyLocation } from "components/Common/MyLocation";

import { INITIAL_LOCATION, REGION_DELTA } from "constants";
import { getLocationPermission, getObjAsyncStorage } from "utils";

import { styles } from "./style";

interface currentLocationProps {
  latitude: number;
  longitude: number;
}

export function MyNear() {
  const [loading, setLoading] = useState(true);
  const [isPermission, setIsPermission] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<currentLocationProps>({
    latitude: INITIAL_LOCATION.latitude,
    longitude: INITIAL_LOCATION.longitude,
  });

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

  const isPermissionGranted = (status: string) => {
    return status === "granted";
  };

  const updateCurrentLocation = (location: currentLocationProps) => {
    const { latitude, longitude } = location;
    setCurrentLocation({ latitude, longitude });
  };

  const handlePermissionNotGranted = async () => {
    const lastLocation = await getObjAsyncStorage("last-location");
    lastLocation !== null && updateCurrentLocation(lastLocation);
  };

  const getCurrentLocation = async () => {
    let location = await Location.getLastKnownPositionAsync();

    if (!location) {
      location = await Location.getCurrentPositionAsync();
    }

    const { latitude, longitude } = location.coords;
    return { latitude, longitude };
  };

  const handlePermissionGranted = async () => {
    const currentLocation = await getCurrentLocation();
    updateCurrentLocation(currentLocation);
  };

  useEffect(() => {
    (async () => {
      const status = await getLocationPermission();
      if (!isPermissionGranted(status)) {
        await handlePermissionNotGranted();
      } else {
        await handlePermissionGranted();
        setIsPermission(true);
      }
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <View style={styles.container}>
      <Image source={require("../../../assets/rolling_loader.gif")} />
    </View>
  ) : (
    <MapView initialRegion={region} style={styles.container}>
      {isPermission && (
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
