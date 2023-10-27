import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { getMapPreview } from "utils/location";
import { RootStackParamList } from "types";

import { styles } from "./style";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Map">;

export function Location() {
  const navigation = useNavigation<HomeScreenProps["navigation"]>();
  const goMapScreen = () => {
    navigation.navigate("Map");
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>가게 위치</Text>
        <Text style={styles.locationText}>서울 강남구</Text>
      </View>
      <View style={styles.location}>
        <Pressable onPress={goMapScreen}>
          <Image
            style={styles.mapImage}
            source={{ uri: getMapPreview(36.6677454, 126.6854125) }}
          />
        </Pressable>
      </View>
    </View>
  );
}
