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
            images: string[];
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
    Tab: undefined;
};

export type ProfileStackParamsList = {
    LikeList: undefined;
    BiddingList: undefined;
    SaleHistory: undefined;
};

export type SignStackParamsList = {
    Start: undefined;
    SelectType: undefined;
    SignUp: {
        type: UserType,
        pickedLocation?: LocationType
    };
    SignIn: undefined;
    SignUpMap: {
        pickedLocation?: LocationType
    };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Tab">;
export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">;
export type MapScreenProps = NativeStackScreenProps<RootStackParamList, "Map">;
export type BidScreenProps = NativeStackScreenProps<RootStackParamList, "Bid">;
export type UploadScreenProps = NativeStackScreenProps<RootStackParamList, "Upload">;

export type ProfileStackScreenProps = NativeStackScreenProps<ProfileStackParamsList>;
export type SignStackScreenProps = NativeStackScreenProps<SignStackParamsList>;
export type SignUpScreenProps = NativeStackScreenProps<SignStackParamsList, "SignUp">;
export type SignUpMapScreenProps = NativeStackScreenProps<SignStackParamsList, "SignUpMap">;

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

export type LocationType = { lat: number, lng: number };
  
export interface UploadFormData {
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
    latitude?: number;
    longitude?: number;
    address?: string;
    idToken?: string;
    profile_image?: string;
    phone?: string;
}

export interface SignInData {
    id: string;
    password: string;
}

export interface UploadInputProps {
    control: Control<UploadFormData>;
    errors: FieldErrors<UploadFormData>;
}

export interface SignUpInputProps {
    control: Control<SignUpData>;
    errors: FieldErrors<SignUpData>;
}

export interface SignInInputProps {
    control: Control<SignInData>;
    errors: FieldErrors<SignInData>;
}

export type UserType = "Seller" | "Buyer";

export interface ItemType {
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
    images: string[];
    latitude: number;
    longitude: number;
  }
  
export type userInfoType = {
    id: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    profile_image: null;
    latitude: number;
    longitude: number;
    role: string;
    address: string;
    idToken: string;
}

export interface LogType {
    user: string;
    profile: null;
    time: string;
    price: number;
    board_id: number;
}