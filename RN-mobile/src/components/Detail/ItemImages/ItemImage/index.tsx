import { Image } from "react-native";

import { THEME_PADDING, WINDOW_WIDTH } from "constant";

import { styles } from "./style";

interface ItemImageProps {
  imageUrl: string;
}

export function ItemImage({ imageUrl }: ItemImageProps) {
  return (
    <Image
      source={{ uri: `http://3.34.126.72:27017/${imageUrl}` }}
      style={[styles.itemImage, { width: WINDOW_WIDTH - THEME_PADDING * 2 }]}
    />
  );
}
