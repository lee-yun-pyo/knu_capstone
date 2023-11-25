import { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";

import { Bidder } from "./Bidder";

import { SORT_TYPE } from "constant";

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
  const [sorted, setSorted] = useState(SORT_TYPE[0]);
  const [sortedBidders, setSortedBidders] = useState([...bidders]);

  const changeSorted = (sortType: string) => {
    setSorted(sortType);
  };

  function biddersNotExist(bidders: BidderType[]): boolean {
    return bidders.length === 0;
  }

  useEffect(() => {
    if (sorted === SORT_TYPE[0]) {
      setSortedBidders(
        [...bidders].sort(
          (a, b) =>
            new Date(b.bidDate).getTime() - new Date(a.bidDate).getTime()
        )
      );
    } else if (sorted === SORT_TYPE[1]) {
      setSortedBidders([...bidders].sort((a, b) => b.bidPrice - a.bidPrice));
    }
  }, [sorted]);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>입찰 기록 </Text>
          <Text style={styles.titleLength}>{`(${bidders.length}명)`}</Text>
        </View>
        {!biddersNotExist(bidders) && (
          <View style={styles.buttonBox}>
            {SORT_TYPE.map((type, index) => (
              <Pressable
                style={[
                  styles.sortButton,
                  sorted === type && styles.selectedButton,
                ]}
                key={index}
                onPress={() => changeSorted(type)}
              >
                <Text
                  style={[
                    styles.sortButtonText,
                    sorted === type && styles.selectedButtonText,
                  ]}
                >
                  {type}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
      {!biddersNotExist(bidders) ? (
        <View style={styles.userWrapper}>
          <ScrollView contentContainerStyle={{ gap: 10 }}>
            {sortedBidders.map((bidder, index) => (
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
