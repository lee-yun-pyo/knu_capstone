import { useState, useLayoutEffect, useCallback } from "react";
import { Alert } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";

import { IconButton } from "components/Common/IconButton";

import { LocationType, SignUpMapScreenProps, SignUpScreenProps } from "types";
import { INITIAL_REGION } from "constants";

import { styles } from "./style";

export function SignUpMap() {
  const navigation = useNavigation<SignUpScreenProps["navigation"]>();
  const route = useRoute<SignUpMapScreenProps["route"]>();
  const { pickedLocation } = route.params;
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null
  );

  const selectLocationHandler = (event: MapPressEvent) => {
    const { latitude: lat, longitude: lng } = event.nativeEvent.coordinate;
    setSelectedLocation({ lat, lng });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("선택한 위치 없음", "지도를 클릭해서 위치를 선택하세요");
      return;
    }
    navigateToSignUp(selectedLocation);
  }, [selectedLocation]);

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

  return (
    <MapView
      initialRegion={INITIAL_REGION}
      style={styles.container}
      onPress={selectLocationHandler}
    >
      {selectedLocation
        ? renderMarker(selectedLocation)
        : pickedLocation && renderMarker(pickedLocation)}
    </MapView>
  );
}
