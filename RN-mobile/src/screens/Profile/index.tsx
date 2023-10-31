import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { PROFILE_MENU_ICON, PROFILE_MENU_NAME } from "constants";

import { styles } from "./style";

export function Profile() {
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
        {PROFILE_MENU_NAME.map((list, index) => (
          <View key={list} style={styles.menuList}>
            <AntDesign
              name={PROFILE_MENU_ICON[index]}
              size={20}
              color="black"
            />
            <Text style={styles.menuName}>{list}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
