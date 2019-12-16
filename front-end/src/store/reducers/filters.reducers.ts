import * as actionTypes from '../constants/actionTypes.constants';
import initialState from './initialState';

export const typeFilters = (state : string[] = initialState.typeFilters, action : any) => {
    switch (action.type) {
        case actionTypes.REMOVE_FILTER:
            return  state.filter((filter : string) => filter !== action.filter);
        case actionTypes.ADD_FILTER:
            return state.includes(action.filter) ? state : state.concat([action.filter]);
        case actionTypes.REMOVE_ALL_FILTERS:
            return [];
        case actionTypes.RESET_FILTERS:
            return action.availableTypeFilters;
        default:
            return state;
    }
}

export const availableTypeFilters = (state : string[] = initialState.availableTypeFilters, action : any) => {
    switch (action.type) {
        case actionTypes.RECEIVE_AVAILABLE_FILTERS:
            return action.filters;
        default:
            return state;
    }
}