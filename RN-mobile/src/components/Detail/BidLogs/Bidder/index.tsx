import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { calculateDaysAgo } from "utils";

import { styles } from "./style";

interface Props {
  name: string;
  bidDate: string;
  bidPrice: number;
}

export function Bidder({ name, bidDate, bidPrice }: Props) {
  const [daysAgo, setDaysAgo] = useState("");

  useEffect(() => {
    setDaysAgo(calculateDaysAgo(bidDate));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Image
          source={require("../../../../../assets/user2.png")}
          style={styles.profileImage}
        />
        <View style={styles.infoTextBox}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.bidDate}>{daysAgo}</Text>
        </View>
      </View>
      <Text style={styles.infoText}>
        <Text style={styles.bidPrice}>{bidPrice.toLocaleString()}</Text>원
      </Text>
    </View>
  );
}
