import axios from "axios";
import { ItemType, SignUpData, UploadFormData } from "types";

const API_URL = "http://3.34.126.72:27017/broccoli";

export async function getItmes(): Promise<ItemType[]> {
    const response = await axios.get(API_URL);
    const itmes = response.data.data.board as ItemType[];

    return itmes;
}

export async function getItemById(id:number): Promise<ItemType> {
    const response = await axios.get(`${API_URL}?id=${id}`);
    const itemInfo = response.data.data.board as ItemType;

    return itemInfo;
}

export async function uploadItem(userInfo: SignUpData, uploadInfo: UploadFormData) {
    const response = await axios.post(API_URL, {
        store_name: userInfo.name,
        store_location: userInfo.address,
        product_name: uploadInfo.title,
        product_description: uploadInfo.description,
        current_price: uploadInfo.lowerLimit,
        upper_limit: uploadInfo.upperLimit,
        lower_limit: uploadInfo.lowerLimit,
        start_time: new Date().toString(),
        end_time: uploadInfo.endTime,
        latitude: userInfo.latitude,
        longitude: userInfo.longitude,
        images: uploadInfo.images,
    }, {
        headers: { 
            "content-type" : "multipart/form-data"
        }
    });
    
    return response.data;
}