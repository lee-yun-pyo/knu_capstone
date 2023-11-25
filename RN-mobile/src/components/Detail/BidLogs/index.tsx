import { View, Text, ScrollView } from "react-native";

import { Bidder } from "./Bidder";

import { styles } from "./style";

interface BidderType {
  name: string;
  bidDate: string;
  bidPrice: number;
}

interface Props {
  bidders: BidderType[];
}

export function BidLogs({ bidders }: Props) {
  function biddersNotExist(bidders: BidderType[]): boolean {
    return bidders.length === 0;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>입찰 기록 </Text>
          <Text style={styles.titleLength}>{`(${bidders.length}명)`}</Text>
        </View>
      </View>
      {!biddersNotExist(bidders) ? (
        <View style={styles.userWrapper}>
          <ScrollView contentContainerStyle={{ gap: 10 }}>
            {[...bidders].map((bidder, index) => (
              <Bidder
                key={index}
                name={bidder.name}
                bidDate={bidder.bidDate}
                bidPrice={bidder.bidPrice}
              />
            ))}
          </ScrollView>
        </View>
      ) : (
        <Text style={styles.noBidderText}>아직 압찰자가 없습니다</Text>
      )}
    </View>
  );
}
