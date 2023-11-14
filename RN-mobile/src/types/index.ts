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

export type SignStackParamsList = {
    Start: undefined;
    SelectType: undefined;
    SignUp: {type: UserType};
    SignIn: undefined;
};

export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">;
export type MapScreenProps = NativeStackScreenProps<RootStackParamList, "Map">;
export type BidScreenProps = NativeStackScreenProps<RootStackParamList, "Bid">;
export type UploadScreenProps = NativeStackScreenProps<RootStackParamList, "Upload">;

export type ProfileStackScreenProps = NativeStackScreenProps<ProfileStackParamsList>;
export type SignStackScreenProps = NativeStackScreenProps<SignStackParamsList>;
export type SignUpScreenProps = NativeStackScreenProps<SignStackParamsList, "SignUp">;

export type SignPathType = "SelectType" | "SignUp" | "SignIn";

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
    images: string[];
    title: string;
    description: string;
    lowerLimit: string;
    upperLimit: string;
    endTime: string;
}

export interface SignUpData {
    name: string;
    email: string;
    id: string;
    password: string;
    passwordConfirm: string;
    latitude: number;
    longitude: number;
}

export interface UploadInputProps {
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
}

export interface SignUpInputProps {
    control: Control<SignUpData>;
    errors: FieldErrors<SignUpData>;
}

export type UserType = "Seller" | "Buyer"