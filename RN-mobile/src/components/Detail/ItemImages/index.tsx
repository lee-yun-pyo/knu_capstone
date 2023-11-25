import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

import { ItemImage } from "./ItemImage";

import { THEME_PADDING, WINDOW_WIDTH } from "constant";

import { styles } from "./style";

interface Props {
  imageArray: string[];
}

export function ItemImages({ imageArray }: Props) {
  const [indexNum, setIndexNum] = useState(1);
  const imageWidthSize = WINDOW_WIDTH - THEME_PADDING * 2;

  const scrollHandler = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = nativeEvent;
    setIndexNum(contentOffset.x / imageWidthSize + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal={true}
        bounces={false}
        onMomentumScrollEnd={scrollHandler}
      >
        {imageArray.map((item, index) => (
          <ItemImage imageUrl={item} key={index} />
        ))}
      </ScrollView>
      <View style={styles.indexView}>
        <Text style={styles.indexText}>
          {indexNum} / {imageArray.length}
        </Text>
      </View>
    </View>
  );
}
