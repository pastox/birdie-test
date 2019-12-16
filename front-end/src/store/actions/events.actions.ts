import * as types from '../constants/actionTypes.constants';
import Event from '../../models/Event.models';

export const requestEvents = (patientId : string, filters : string[], startDate : string, endDate : string) => ({
    type : types.REQUEST_EVENTS,
    patientId,
    filters,
    startDate,
    endDate
})

export const receiveEvents = (events : Event[]) => ({
    type : types.RECEIVE_EVENTS,
    events
})