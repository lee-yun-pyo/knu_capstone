import axios from "axios";
import { ItemType, FormData, userInfoType } from "types";

const API_URL = "http://3.34.126.72:27017/broccoli";

export async function getItmes() {
    const response = await axios.get(API_URL);
    const itmes = response.data.data.board as ItemType[];

    return itmes;
}

export async function uploadItem(userInfo: userInfoType, uploadInfo: FormData) {
    await axios.post(API_URL, {
        store_name: userInfo.name,
        store_location: userInfo.address,
        product_name: uploadInfo.title,
        product_description: uploadInfo.description,
        current_price: uploadInfo.lowerLimit,
        upper_limit: uploadInfo.upperLimit,
        lower_limit: uploadInfo.lowerLimit,
        start_time: new Date(),
        end_time: uploadInfo.endTime,
        latitude: userInfo.latitude,
        longitude: userInfo.longitude,
        images: uploadInfo.images
    }, {
        headers: { 
            "content-type" : "multipart/form-data"
        }
    });
}