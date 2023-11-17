import { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import {
  FieldErrors,
  UseFormClearErrors,
  UseFormSetError,
} from "react-hook-form";

import { ErrorMessage } from "components/Common/ErrorMessage";

import { LocationType, SignStackScreenProps, SignUpData } from "types";
import { getMapPreview } from "utils/location";

import { commonStyle } from "screens/Upload/style";
import { styles } from "./style";

interface Props {
  pickedLocation: LocationType | undefined;
  setCoordValue: (value: LocationType) => void;
  setAddressValue: (value: string) => void;
  errors: FieldErrors<SignUpData>;
  setError: UseFormSetError<SignUpData>;
  clearErrors: UseFormClearErrors<SignUpData>;
}

export function MapInput({
  pickedLocation,
  setCoordValue,
  setAddressValue,
  errors,
  setError,
  clearErrors,
}: Props) {
  const navigation = useNavigation<SignStackScreenProps["navigation"]>();
  const [geoName, setGeoName] = useState<string | null>(null);
  const handlePress = () => {
    navigation.navigate("SignUpMap", { pickedLocation });
  };

  const getCityName = async (location: LocationType) => {
    try {
      const result = await Location.reverseGeocodeAsync(
        {
          latitude: location.lat,
          longitude: location.lng,
        },
        { useGoogleMaps: false }
      );
      return `${result[0].city || result[0].region} ${result[0].district}`;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const updateGeoName = async () => {
      if (!pickedLocation) {
        setError("latitude", {
          type: "required",
          message: "가게 위치를 설정해주세요",
        });
        return;
      }
      const cityName = await getCityName(pickedLocation);

      if (!cityName) {
        return;
      }
      setGeoName(cityName);
      setAddressValue(cityName);
      setCoordValue(pickedLocation);
      clearErrors("latitude");
    };

    updateGeoName();
  }, [pickedLocation]);

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>가게 위치 설정</Text>
      <Pressable onPress={handlePress}>
        <View
          style={[
            styles.mapPreview,
            errors.latitude && commonStyle.warningInput,
          ]}
        >
          {pickedLocation ? (
            <Image
              style={styles.mapImage}
              source={{
                uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
              }}
            />
          ) : (
            <Text style={styles.mapText}>가게 위치를 설정해주세요</Text>
          )}
        </View>
      </Pressable>
      {errors.latitude?.message && (
        <ErrorMessage errorsMsg={errors.latitude.message} />
      )}
      {pickedLocation && geoName && <Text>{geoName}</Text>}
    </View>
  );
}
