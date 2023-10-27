import { View } from "react-native";

import { styles } from "./style";

interface Props {
  width: number;
  height: number;
}

export function Skeleton({ width, height }: Props) {
  return <View style={[styles.container, { width: `${width}%`, height }]} />;
}
