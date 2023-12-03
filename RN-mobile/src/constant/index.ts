import { Dimensions } from "react-native";
import { profileMenuType } from "types";

export const TIME_UNITS = {
    weeks: 7,
    hours: 24,
    minutes: 60,
    seconds: 60,
    millisecond: 1000
};

export const REGION_DELTA = 0.01;

export const THEME_PADDING = 15;

export const { width: WINDOW_WIDTH } = Dimensions.get('window');

export const WON_SYMBOL = '\u20a9';

export const WARNNING_MESSAGE= {
    HIGH: "상한가보다 높게 입찰하실 수 없습니다",
    LOW:  "현재가/시작가보다 낮게 입찰하실 수 없습니다",
    UNFULLFILED_UNIT: "100원(최소 단위) 단위로 입력해주세요"
};

export const PROFILE_MENU: profileMenuType[] = [
  {
    name: "관심목록",
    icon: "hearto",
    path: "LikeList",
  },
  {
    name: "입찰내역",
    icon: "profile",
    path: "BiddingList",
  },
  {
    name: "판매내역",
    icon: "shoppingcart",
    path: "SaleHistory",
  }
];

export const INITIAL_LOCATION = {
  latitude: 37.574187,
  longitude: 126.976882,
};

export const INITIAL_DELTA = {
  latitudeDelta: REGION_DELTA,
  longitudeDelta: REGION_DELTA
};

export const INITIAL_REGION = {
  ...INITIAL_LOCATION,
  ...INITIAL_DELTA
};

export const MAXIMUM_PICKED_NUMBER = 5;

export const MINIMUM_PRICE_UNIT = 100;

export const API_URL = "http://3.34.126.72:27017";

export const apiPath = {
  base: () => '/broccoli',
  item: (itemId: number) => `${apiPath.base()}?id=${itemId}`,
  bidLog: (itemId: number) => `${apiPath.base()}/log?id=${itemId}`,
  isEnd: (itemId: number) => `${apiPath.base()}/end?id=${itemId}`
}