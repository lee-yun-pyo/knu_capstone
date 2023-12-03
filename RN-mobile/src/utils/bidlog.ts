import axios from "axios";

import { API_URL, apiPath } from "constant";
import { LogPostType, LogDataType } from "types";


export async function getBidLogs(board_id: number) {
    const response = await axios.get(`${API_URL}${apiPath.bidLog(board_id)}`);
    const result = response.data.data.log as LogDataType[];
    
    return result;
}

export async function postBidLogs(data: LogPostType) {
    const response = await axios.post(`${API_URL}${apiPath.base()}/log`, data, { 
        headers: { 
		"content-type" : "multipart/form-data"
        }
    });

    const result = response.data.statusCode;
    return result;
}

export async function postBidEnd(board_id:number) {
    const response = await axios.post(`${API_URL}${apiPath.base()}/end`, {
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
    const response = await axios.get(`${API_URL}${apiPath.isEnd(board_id)}`);
    const result = response.data.isExpired;

    return result;
}