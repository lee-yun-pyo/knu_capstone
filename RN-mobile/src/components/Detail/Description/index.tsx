import { View, Text } from "react-native";

import { styles } from "./style";

interface Props {
  title: string;
  date: string;
  description: string;
}

export function Description({ title, date, description }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
