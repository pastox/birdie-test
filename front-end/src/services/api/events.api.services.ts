import axios, { AxiosResponse, AxiosError } from 'axios';
import Event from '../../models/Event.models';
import url from './url.api';

export const fetchApiEvents = (patientId : string, filters : string, startDate : string, endDate : string) : Promise<Event[]> => {
    const data = {
        patientId,
        filters,
        startDate,
        endDate
    }
    return axios.post(url + '/events', data, {
        headers : {"Content-Type" : "application/json"}
    })
    .then((res : AxiosResponse<Event[]>) => {
        return res.data;
    })
    .catch((err : AxiosError) => {
        throw Error;
    })
}