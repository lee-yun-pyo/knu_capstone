import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import { Alert, Linking } from "react-native";
import MapView, { MapPressEvent, Marker, Region } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";

import { IconButton } from "components/Common/IconButton";

import {
  LocationProps,
  LocationType,
  RegionProps,
  SignUpMapScreenProps,
  SignUpScreenProps,
} from "types";
import {
  INITIAL_LOCATION,
  REGION_DELTA,
  INITIAL_DELTA,
  INITIAL_REGION,
} from "constant";

import { styles } from "./style";

// 내 위치 설정 관련 모듈
import { MyLocationButton } from "components/Common/MyLocationButon";
import {
  getLocationPermission,
  getObjAsyncStorage,
  isPermissionGranted,
  setObjAsyncStorage,
} from "utils";
import * as Location from "expo-location";
import { MyLocation } from "components/Common/MyLocation";

export function SignUpMap() {
  const navigation = useNavigation<SignUpScreenProps["navigation"]>();
  const route = useRoute<SignUpMapScreenProps["route"]>();

  // 가게 위치 결정 마킹
  const { pickedLocation } = route.params;
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null
  );

  const selectLocationHandler = (event: MapPressEvent) => {
    const { latitude: lat, longitude: lng } = event.nativeEvent.coordinate;
    setSelectedLocation({ lat, lng });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation && !pickedLocation) {
      Alert.alert("선택한 위치 없음", "지도를 클릭해서 위치를 선택하세요");
      return;
    }

    navigateToSignUp(selectedLocation || pickedLocation!);
  }, [selectedLocation, pickedLocation]);

  const navigateToSignUp = useCallback(
    (location: LocationType) => {
      navigation.navigate("SignUp", {
        pickedLocation: location,
        type: "Seller",
      });
    },
    [navigation]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name="save"
          size={24}
          color="black"
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  const renderMarker = (location: LocationType) => (
    <Marker
      title="선택한 위치"
      coordinate={{
        latitude: location.lat,
        longitude: location.lng,
      }}
      image={require("../../../../assets/location_red.png")}
    />
  );

  // 내 위치 설정
  const [permissionStatus, setPermissionStatus] = useState("");
  const [myLocation, setMyLocation] = useState<LocationProps>(INITIAL_LOCATION);
  const [currentLocation, setCurrentLocation] =
    useState<RegionProps>(INITIAL_REGION);

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

  const updateCurrentLocation = (location: RegionProps) => {
    const { latitude, longitude } = location;
    setCurrentLocation(location);
    setMyLocation({ latitude, longitude });
  };

  const handlePermissionNotGranted = async () => {
    const lastLocation = await getObjAsyncStorage("last-location");
    lastLocation !== null && updateCurrentLocation(lastLocation);
  };

  const handleMapRegionChange = async (region: Region) => {
    setCurrentLocation(region);
    setObjAsyncStorage("last-location", region);
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
    };

    paintMap();
  }, [permissionStatus]);

  return (
    <MapView
      initialRegion={currentLocation}
      style={styles.container}
      onRegionChangeComplete={handleMapRegionChange}
      region={currentLocation}
      onPress={selectLocationHandler}
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
      {selectedLocation
        ? renderMarker(selectedLocation)
        : pickedLocation && renderMarker(pickedLocation)}
      <MyLocationButton
        onPress={handlePressMyLocationBtn}
        isPermitLocation={isPermissionGranted(permissionStatus)}
      />
    </MapView>
  );
}
