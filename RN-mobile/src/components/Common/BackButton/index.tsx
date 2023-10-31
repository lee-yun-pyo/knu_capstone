import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { UploadScreenProps } from "types";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const navigation = useNavigation<UploadScreenProps["navigation"]>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign name="close" size={24} color="black" />
    </TouchableOpacity>
  );
}
