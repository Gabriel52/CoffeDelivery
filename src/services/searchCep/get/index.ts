import { API_LIST } from "../../../configuration/endpoints";
import { API } from "../../api";

type Props = {
    cep: string;
}

type GetResponse = {
    error: boolean;
    data: any;
}

export async function get({cep}: Props):Promise<GetResponse>{
    const params = 
        `${API_LIST.searchCep}/${cep}/json`
    
    try{
        const response = await API.get(params)
        return { error: false, data: response.data };
    }catch(err){
        return { error: true, data: err };
    }
}