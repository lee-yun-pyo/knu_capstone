import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LocationType, SignStackScreenProps } from "types";
import { getMapPreview } from "utils/location";

import { commonStyle } from "screens/Upload/style";
import { styles } from "./style";

interface Props {
  pickedLocation: LocationType | undefined;
}

export function MapInput({ pickedLocation }: Props) {
  const navigation = useNavigation<SignStackScreenProps["navigation"]>();
  const handlePress = () => {
    navigation.navigate("SignUpMap", { pickedLocation });
  };

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>가게 위치 설정</Text>
      <Pressable onPress={handlePress}>
        <View style={styles.mapPreview}>
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
    </View>
  );
}
