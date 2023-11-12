import { ScrollView } from "react-native";

import { ItemImage } from "./ItemImage";

interface Props {
  imageArray: string[];
}

export function ItemImages({ imageArray }: Props) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      horizontal={true}
      bounces={false}
    >
      {imageArray.map((item, index) => (
        <ItemImage imageUrl={item} key={index} />
      ))}
    </ScrollView>
  );
}
