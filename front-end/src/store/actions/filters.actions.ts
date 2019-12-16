import * as types from '../constants/actionTypes.constants';

export const removeFilter = (filter : string) => ({
    type : types.REMOVE_FILTER,
    filter
});

export const addFilter = (filter : string) => ({
    type : types.ADD_FILTER,
    filter
});

export const resetFilters = (availableTypeFilters : string[]) => ({
    type : types.RESET_FILTERS,
    availableTypeFilters
});

export const removeAllFilters = () => ({
    type : types.REMOVE_ALL_FILTERS
});

export const requestAvailableFilters = () => ({
    type : types.REQUEST_AVAILABLE_FILTERS
});

export const receiveAvailableFilters = (filters : string[]) => ({
    type : types.RECEIVE_AVAILABLE_FILTERS,
    filters
});