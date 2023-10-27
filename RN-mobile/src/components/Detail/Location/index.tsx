import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { getMapPreview } from "utils/location";
import { RootStackParamList } from "types";

import { styles } from "./style";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Map">;

interface Props {
  latitude: number;
  longitude: number;
  location: string;
  storeName: string;
}

export function Location({ latitude, longitude, location, storeName }: Props) {
  const navigation = useNavigation<HomeScreenProps["navigation"]>();
  const goMapScreen = () => {
    navigation.navigate("Map", { latitude, longitude, storeName });
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>가게 위치</Text>
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <View style={styles.location}>
        <Pressable onPress={goMapScreen}>
          <Image
            style={styles.mapImage}
            source={{ uri: getMapPreview(latitude, longitude) }}
          />
        </Pressable>
      </View>
    </View>
  );
}
