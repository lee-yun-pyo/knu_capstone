import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { UploadScreenProps } from "types";

import { styles } from "./style";

export function UploadButton() {
  const navigation = useNavigation<UploadScreenProps["navigation"]>();

  const handlePress = () => {
    navigation.navigate("Upload");
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <AntDesign name="plus" size={20} color="white" />
        <Text style={styles.text}>글쓰기</Text>
      </View>
    </Pressable>
  );
}
