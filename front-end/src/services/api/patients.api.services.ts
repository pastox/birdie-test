import axios, { AxiosResponse, AxiosError } from 'axios';
import url from './url.api';

export const fetchApiPatients = () : Promise<string[]> => {
    return axios.get(url + '/events/patients')
    .then((res : AxiosResponse) => {
        return res.data
    })
    .catch((err : AxiosError) => {
        throw Error;
    })
}