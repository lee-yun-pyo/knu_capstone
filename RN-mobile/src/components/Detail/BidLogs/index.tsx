import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { Bidder } from "./Bidder";

import { getBidLogs } from "utils/bidlog";
import { LogType } from "types";

import { styles } from "./style";

interface Props {
  boardId: number;
}

export function BidLogs({ boardId }: Props) {
  const [bidders, setBidders] = useState<LogType[]>([]);

  function biddersNotExist(bidders: LogType[]): boolean {
    return bidders.length === 0;
  }

  const getBidLogsHandler = async (id: number) => {
    const log = await getBidLogs(id);
    setBidders(log.reverse());
  };

  useEffect(() => {
    getBidLogsHandler(boardId);
  }, [bidders]);

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
                name={bidder.user}
                bidDate={bidder.time}
                bidPrice={bidder.price}
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
