import { useEffect, useState, useCallback } from "react";
import { ActivityIndicator, View, Alert, Linking } from "react-native";
import MapView, { Marker, MarkerPressEvent, Region } from "react-native-maps";
import * as Location from "expo-location";

import { MyLocation } from "components/Common/MyLocation";
import { MyLocationButton } from "components/Common/MyLocationButon";

import { RegionProps, LocationProps } from "types";
import { INITIAL_LOCATION, INITIAL_REGION, INITIAL_DELTA } from "constants";
import { BackGroundColor } from "constants/color";
import {
  getLocationPermission,
  getObjAsyncStorage,
  isPermissionGranted,
  setObjAsyncStorage,
} from "utils";

import { styles } from "./style";

export function MyNear() {
  const [loading, setLoading] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState("");
  const [myLocation, setMyLocation] = useState<LocationProps>(INITIAL_LOCATION);
  const [currentLocation, setCurrentLocation] =
    useState<RegionProps>(INITIAL_REGION);

  const handlePressMarker = (event: MarkerPressEvent) => {
    const { action } = event.nativeEvent;
    if (action === "marker-press") {
      return;
    }
    // TO_DO: navigate 처리
  };

  const handleMapRegionChange = async (region: Region) => {
    setCurrentLocation(region);
    setObjAsyncStorage("last-location", region);
  };

  const linkToSettings = useCallback(async () => {
    await Linking.openSettings();
  }, []);

  const handlePressMyLocationBtn = async () => {
    const status = await getLocationPermission();
    setPermissionStatus(status);
    if (!isPermissionGranted(status)) {
      Alert.alert(
        "위치 설정 사용",
        "서비스를 이용하려면 위치 접근을 허용해주세요",
        [
          { text: "취소", style: "cancel" },
          {
            text: "설정",
            style: "destructive",
            onPress: linkToSettings,
          },
        ]
      );
      return;
    }
    await handlePermissionGranted();
  };

  const updateCurrentLocation = (location: RegionProps) => {
    const { latitude, longitude } = location;
    setCurrentLocation(location);
    setMyLocation({ latitude, longitude });
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

    return {
      ...location.coords,
      ...INITIAL_DELTA,
    };
  };

  const handlePermissionGranted = async () => {
    const currentLocation = await getCurrentLocation();
    updateCurrentLocation(currentLocation);
  };

  useEffect(() => {
    const paintMap = async () => {
      const status = await getLocationPermission();
      setPermissionStatus(status);
      if (!isPermissionGranted(status)) {
        await handlePermissionNotGranted();
      } else {
        await handlePermissionGranted();
      }
      setLoading(false);
    };

    paintMap();
  }, [permissionStatus]);

  return loading ? (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <ActivityIndicator size="large" color={BackGroundColor.GREEN} />
    </View>
  ) : (
    <MapView
      initialRegion={currentLocation}
      onRegionChangeComplete={handleMapRegionChange}
      region={currentLocation}
      style={styles.container}
    >
      {isPermissionGranted(permissionStatus) && (
        <Marker
          coordinate={{
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
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
      <MyLocationButton
        onPress={handlePressMyLocationBtn}
        isPermitLocation={isPermissionGranted(permissionStatus)}
      />
    </MapView>
  );
}
