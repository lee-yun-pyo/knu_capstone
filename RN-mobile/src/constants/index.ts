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
    LOW:  "현재가/시작가보다 낮게 입찰하실 수 없습니다"
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
]