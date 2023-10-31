import { useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { PROFILE_MENU } from "constants";
import { ProfileStackScreenProps } from "types";

import { styles } from "./style";

export function Profile() {
  const navigation = useNavigation<ProfileStackScreenProps["navigation"]>();

  const navigateMenu = (listName: string) => {
    switch (listName) {
      case PROFILE_MENU[0].name:
        navigation.navigate(PROFILE_MENU[0].path);
        break;
      case PROFILE_MENU[1].name:
        navigation.navigate(PROFILE_MENU[1].path);
        break;
      case PROFILE_MENU[2].name:
        navigation.navigate(PROFILE_MENU[2].path);
        break;
    }
  };

  useEffect(() => {
    // fetch GET 요청
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nameWrapper}>
        <Image
          source={require("../../../assets/user2.png")}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>userName</Text>
      </View>
      <View style={styles.separator} />
      <Text style={styles.title}>나의 거래</Text>
      <View style={styles.menuListView}>
        {PROFILE_MENU.map((menu) => (
          <Pressable key={menu.name} onPress={() => navigateMenu(menu.name)}>
            <View style={styles.menuList}>
              <AntDesign name={menu.icon} size={20} color="black" />
              <Text style={styles.menuName}>{menu.name}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
