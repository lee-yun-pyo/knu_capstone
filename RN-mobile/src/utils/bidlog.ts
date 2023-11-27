import axios from "axios";

import { LogPostType, LogType } from "types";

const API_URL = "http://3.34.126.72:27017/broccoli";

export async function getBidLogs(board_id: number) {
    const response = await axios.get(`${API_URL}/log?id=${board_id}`);
    const result = response.data.data.log as LogType[];
    
    return result;
}

export async function postBidLogs(data: LogPostType) {
    const response = await axios.post(`${API_URL}/log`, data, { 
        headers: { 
		"content-type" : "multipart/form-data"
        }
    });

    const result = response.data.statusCode;
    return result;
}

export async function postBidEnd(board_id:number) {
    const response = await axios.post(`${API_URL}/end`, {
        id: board_id
    }, {
        headers: { 
            "content-type" : "application/json"
        }
    });

    const result = response.data.statusCode;
    return result;
}

export async function getPostEnd(board_id:number): Promise<number> {
    const response = await axios.get(`${API_URL}/end?id=${board_id}`);
    const result = response.data.isExpired;

    return result;
}