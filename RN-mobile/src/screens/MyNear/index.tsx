import { useEffect, useState, useCallback } from "react";
import { ActivityIndicator, View, Alert, Linking } from "react-native";
import MapView, { Marker, MarkerPressEvent, Region } from "react-native-maps";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import { MyLocation } from "components/Common/MyLocation";
import { MyLocationButton } from "components/Common/MyLocationButon";

import { RegionProps, LocationProps, ItemType, DetailScreenProps } from "types";
import { INITIAL_LOCATION, INITIAL_REGION, INITIAL_DELTA } from "constant";
import {
  getLocationPermission,
  getObjAsyncStorage,
  isBiddingClosed,
  isExpiredDate,
  isPermissionGranted,
  setObjAsyncStorage,
} from "utils";
import { getItmes } from "utils/item";

import { styles } from "./style";

export function MyNear() {
  const [loading, setLoading] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState("");
  const [myLocation, setMyLocation] = useState<LocationProps>(INITIAL_LOCATION);
  const [currentLocation, setCurrentLocation] =
    useState<RegionProps>(INITIAL_REGION);

  const navigation = useNavigation<DetailScreenProps["navigation"]>();

  const handlePressMarker = (event: MarkerPressEvent, id: number) => {
    const { action } = event.nativeEvent;
    if (action === "marker-press") {
      return;
    }
    navigation.navigate("Detail", { boardId: id });
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

  const [stores, setStores] = useState<ItemType[]>([]);
  const getItemsHandler = async () => {
    const fetchedItmes = await getItmes();
    setStores(fetchedItmes);
  };

  useFocusEffect(
    useCallback(() => {
      getItemsHandler();
    }, [])
  );

  return loading ? (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <ActivityIndicator size="large" />
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

      {stores.map((store) => (
        <Marker
          key={store.board_id}
          title={store.product_name}
          coordinate={{ latitude: store.latitude, longitude: store.longitude }}
          image={
            isBiddingClosed(store.isExpired) || isExpiredDate(store.end_time)
              ? require("../../../assets/location_isExpired.png")
              : require("../../../assets/location_red.png")
          }
          onPress={(event) => handlePressMarker(event, store.board_id)}
        />
      ))}
      <MyLocationButton
        onPress={handlePressMyLocationBtn}
        isPermitLocation={isPermissionGranted(permissionStatus)}
      />
    </MapView>
  );
}
