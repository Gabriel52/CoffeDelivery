import { AxiosRequestConfig } from "axios";
import { BASE_URL_SEARCH_USER_LOCATION } from "../../../configuration/const";
import { API } from "../../api";

type Props = {
    latitude: number;
    longitude: number;
}

export async function get({latitude, longitude}: Props){
    const params = 
        `${BASE_URL_SEARCH_USER_LOCATION}/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    
    try{
        const response = await API.get(params)
        return { error: false, data: response.data };
    }catch(err){
        return { error: true, data: err };
    }
}