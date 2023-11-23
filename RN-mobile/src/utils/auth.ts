import axios from "axios";

import { SignUpProps, SignInProps } from "types/auth";

const API_URL = "http://3.34.126.72:27017/broccoli"

export async function createUser({ role, userInfo }: SignUpProps) {
    const url = `${API_URL}/users`;

    await axios.post(url, {
        email: userInfo.email,
        password: userInfo.password,
        id: userInfo.id,
        name:userInfo.name,
        phone: "010-1234-1324",
        role: role,
        profile_image: null,
        latitude: userInfo.latitude || null,
        longitude: userInfo.longitude || null,
        address: userInfo.address || null,
        idToken: ""
    },
    {
        headers: { 
            "content-type" : "multipart/form-data"
        }
    });

}

export async function loginUser({id, password}: SignInProps) {
    const url = `${API_URL}/users?id=${id}&pw=${password}`;

    const response = await axios.get(url);
    const token = response.data.isAvailable;

    return token;
}