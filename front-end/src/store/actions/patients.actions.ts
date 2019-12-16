import * as types from '../constants/actionTypes.constants';

export const setPatient = (id : string) => ({
    type : types.SET_PATIENT,
    id
});

export const requestPatients = () => ({
    type : types.REQUEST_PATIENTS,
})

export const receivePatients = (patients : string[]) => ({
    type : types.RECEIVE_PATIENTS,
    patients
})