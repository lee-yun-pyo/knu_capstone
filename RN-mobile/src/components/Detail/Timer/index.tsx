import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Skeleton } from "components/Common/Skeleton";

import { getLeftTimeByUnit, getTimeToNumber } from "utils";

import { styles } from "./style";

interface Props {
  deadLineTime: string;
}

export function Timer({ deadLineTime }: Props) {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const targetTime = getTimeToNumber(deadLineTime);
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = targetTime - now;

      setHours(getLeftTimeByUnit("hours", timeDiff));
      setMinutes(getLeftTimeByUnit("minutes", timeDiff));
      setSeconds(getLeftTimeByUnit("seconds", timeDiff));

      if (timeDiff < 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [deadLineTime]);

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Feather name="clock" size={20} color="black" />
      {minutes !== "" ? (
        parseInt(minutes) < 0 ? (
          <Text style={styles.subText}>마감</Text>
        ) : (
          hours !== "" && (
            <Text style={styles.leftTime}>
              {hours}:{minutes}:{seconds}
            </Text>
          )
        )
      ) : (
        <Skeleton width={80} height={20} />
      )}
    </View>
  );
}
