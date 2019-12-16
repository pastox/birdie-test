import * as types from '../constants/actionTypes.constants';

export const setStartDate = (date : string) => ({
    type : types.SET_START_DATE,
    date
});

export const setEndDate = (date : string) => ({
    type : types.SET_END_DATE,
    date
});