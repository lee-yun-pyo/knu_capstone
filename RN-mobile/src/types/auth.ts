import { UserType } from "types";

export interface SignUpProps {
    role: UserType,
    userInfo : {
        email: string;
        password: string;
        id: string;
        name: string;
        phone: string;
        profile_image?: string;
        latitude?: number;
        longitude?: number;
        address?: string;
        idToken?: string;
    }
}
export interface SignInProps {
    id: string;
    password: string;
}