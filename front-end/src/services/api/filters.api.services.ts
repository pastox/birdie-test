import axios, { AxiosResponse, AxiosError } from 'axios';
import url from './url.api';

export const fetchApiFilters = () : Promise<string[]> =>  {
    return axios.get(url + '/events/types')
    .then((res : AxiosResponse) => {
        return res.data;
    })
    .catch((err : AxiosError) => {
        throw Error;
    })
}