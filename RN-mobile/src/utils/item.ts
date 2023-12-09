import axios from "axios";
import { API_URL, apiPath } from "constant";

import { ItemType, SignUpData, UploadFormData } from "types";


export async function getItmes(): Promise<ItemType[]> {
    const response = await axios.get(`${API_URL}${apiPath.base()}`);
    const itmes = response.data.data.board as ItemType[];

    return itmes;
}

export async function getItemById(id:number): Promise<ItemType> {
    const response = await axios.get(`${API_URL}${apiPath.item(id)}`);
    const itemInfo = response.data.data.board as ItemType;

    return itemInfo;
}

export async function uploadItem(userInfo: SignUpData, uploadInfo: UploadFormData) {
    try {
        const formData = new FormData();
        
        uploadInfo.images.forEach((image) => {
            if (image.type && image.fileName) {
                formData.append("images", {uri: image.uri, name: image.fileName, type: 'image/jpg'} as any);
            }
        });
        
        const fields = {
            store_name: userInfo.name,
            store_location: userInfo.address,
            product_name: uploadInfo.title,
            product_description: uploadInfo.description,
            current_price: uploadInfo.lowerLimit,
            upper_limit: uploadInfo.upperLimit,
            lower_limit: uploadInfo.lowerLimit,
            start_time: new Date().toString(),
            end_time: uploadInfo.endTime,
            latitude: userInfo.latitude.toString(),
            longitude: userInfo.longitude.toString(),
        };
      
        Object.entries(fields).forEach(([key, value]) => {
            formData.append(key, value);
        });
    
        const response = await axios.post(`${API_URL}${apiPath.base()}`, formData, {
            headers: { 
                "Content-Type" : "multipart/form-data"
            }
        });
    
        return response.data;
    } catch (error) {
        console.error(error);
    }
}