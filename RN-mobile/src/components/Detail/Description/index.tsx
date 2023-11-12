import { View, Text } from "react-native";

import { calculateDaysAgo, getFormattedDate } from "utils";

import { styles } from "./style";

interface Props {
  title: string;
  registerDate: string;
  description: string;
}

export function Description({ title, registerDate, description }: Props) {
  const daysAgo = calculateDaysAgo(registerDate);
  const formatedDate = getFormattedDate(registerDate);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>
        {daysAgo} · {formatedDate} 등록
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
