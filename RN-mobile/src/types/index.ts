import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Control, FieldErrors } from "react-hook-form";

export type RootStackParamList = {
    Home: undefined;
    Detail: {
        info: {
            board_id: number;
            store_name: string;
            store_location: string;
            product_name: string;
            product_description: string;
            current_price: number;
            upper_limit: number;
            lower_limit: number;
            like_count: number;
            start_time: string;
            end_time: string;
            product_image: string[];
            latitude: number,
            longitude: number,
        };
    };
    Map: {
        latitude: number;
        longitude: number;
        storeName: string;
    };
    Bid: {
        currentPrice: number;
        lowerPrice: number;
        upperPrice: number;
    },
    Upload: undefined;
};

export type ProfileStackParamsList = {
    LikeList: undefined;
    BiddingList: undefined;
    SaleHistory: undefined;
};

export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">;
export type MapScreenProps = NativeStackScreenProps<RootStackParamList, "Map">;
export type BidScreenProps = NativeStackScreenProps<RootStackParamList, "Bid">;
export type UploadScreenProps = NativeStackScreenProps<RootStackParamList, "Upload">;

export type ProfileStackScreenProps = NativeStackScreenProps<ProfileStackParamsList>;

type profileMenuIconType = "hearto" | "profile" | "shoppingcart";
type ProfileMenuPathType = "LikeList" | "BiddingList" | "SaleHistory";
export type profileMenuType = { name: string, icon: profileMenuIconType, path: ProfileMenuPathType };

export interface LocationProps {
    latitude: number;
    longitude: number;
}
  
export interface RegionProps extends LocationProps {
    latitudeDelta: number;
    longitudeDelta: number;
}
  
export interface FormData {
    title: string;
    description: string;
    lowerLimit: string;
    upperLimit: string;
    endTime: string;
}

export interface UploadInputProps {
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
}