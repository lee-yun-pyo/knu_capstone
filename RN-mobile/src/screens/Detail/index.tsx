import { ScrollView, View, Image } from "react-native";

import { Profile } from "components/Detail/Profile";
import { Price } from "components/Detail/Price";
import { Description } from "components/Detail/Description";
import { Location } from "components/Detail/Location";
import { Footer } from "components/Detail/Footer";

import { styles } from "./style";

export function Detail() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Image
          source={require("../../../assets/user2.png")}
          style={styles.itemImage}
        />
        <Profile storeName={"행복한 빵집"} location={"서울 강남구"} />
        <Description title={"빵사세요"} date={"2023"} description={"맛있음"} />
        <Price startPrice={1500} upperPrice={3000} limitTime={"23"} />
        <Location />
      </ScrollView>
      <Footer />
    </View>
  );
}