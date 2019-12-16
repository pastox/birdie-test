import { SET_PATIENT, RECEIVE_PATIENTS } from '../constants/actionTypes.constants';
import initialState from './initialState';

export const patientId = (state : string = initialState.patientId, action : any) => {
    switch (action.type) {
        case SET_PATIENT:
            return action.id;
        default:
            return state;
    }
}

export const patients = (state : string[] = initialState.patients, action : any) => {
    switch (action.type) {
        case RECEIVE_PATIENTS:
            return action.patients;
        default:
            return state;
    }
}