import { SET_START_DATE, SET_END_DATE } from '../constants/actionTypes.constants';
import initialState from './initialState';

export const startDate = (state : string = initialState.startDate, action : any) => {
    switch (action.type) {
        case SET_START_DATE:
            return action.date;
        default:
            return state;
    }
}

export const endDate = (state : string = initialState.endDate, action : any) => {
    switch (action.type) {
        case SET_END_DATE:
            return action.date;
        default:
            return state;
    }
}
