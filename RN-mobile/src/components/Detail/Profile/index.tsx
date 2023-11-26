import { View, Text, Image } from "react-native";

import { styles } from "./style";

interface Props {
  storeName: string;
  location: string;
}

export function Profile({ storeName, location }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/user2.png")}
        style={styles.profileImage}
      />
      <View style={styles.profileText}>
        <Text style={styles.storeName}>{storeName}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
}
