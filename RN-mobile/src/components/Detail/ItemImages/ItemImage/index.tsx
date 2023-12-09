import { Image } from "react-native";

import { API_URL, THEME_PADDING, WINDOW_WIDTH, apiPath } from "constant";

import { styles } from "./style";

interface ItemImageProps {
  imageUrl: string;
}

export function ItemImage({ imageUrl }: ItemImageProps) {
  return (
    <Image
      source={{ uri: `${API_URL}/${apiPath.imagePath(imageUrl)}` }}
      style={[styles.itemImage, { width: WINDOW_WIDTH - THEME_PADDING * 2 }]}
    />
  );
}
