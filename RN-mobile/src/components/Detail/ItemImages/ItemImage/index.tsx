import { Image } from "react-native";

import { THEME_PADDING, WINDOW_WIDTH } from "constants";

import { styles } from "./style";

interface ItemImageProps {
  imageUrl: string;
}

export function ItemImage({ imageUrl }: ItemImageProps) {
  return (
    <Image
      source={{ uri: imageUrl }}
      style={[styles.itemImage, { width: WINDOW_WIDTH - THEME_PADDING * 2 }]}
    />
  );
}
