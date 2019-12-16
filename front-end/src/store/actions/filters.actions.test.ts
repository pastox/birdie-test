import * as actions from './filters.actions';
import * as actionTypes from '../constants/actionTypes.constants';

const filter : string = "check_in";

describe('filters actions', () => {
    it('should create an action to remove a filter', () => {
        const expectedAction = {
        type: actionTypes.REMOVE_FILTER,
        filter
        }
        expect(actions.removeFilter(filter)).toEqual(expectedAction);
    });
    it('should create an action to add a filter', () => {
        const expectedAction = {
          type: actionTypes.ADD_FILTER,
          filter
        }
        expect(actions.addFilter(filter)).toEqual(expectedAction);
    });
    it('should create an action to remove all the filters (take none)', () => {
        const expectedAction = {
        type: actionTypes.REMOVE_ALL_FILTERS,
        }
        expect(actions.removeAllFilters()).toEqual(expectedAction);
    });
    it('should create an action to reset the filters (take them all)', () => {
        const availableFilters : string[] = [filter, "general_observation"];
        const expectedAction = {
            type: actionTypes.RESET_FILTERS,
            availableTypeFilters : availableFilters
        }
        expect(actions.resetFilters(availableFilters)).toEqual(expectedAction);
    });
    it('should create an action to request the available filters', () => {
        const expectedAction = {
            type: actionTypes.REQUEST_AVAILABLE_FILTERS,
        }
        expect(actions.requestAvailableFilters()).toEqual(expectedAction);
    });
    it('should create an action to receive the available filters', () => {
        const availableFilters : string[] = [filter, "general_observation"];
        const expectedAction = {
            type: actionTypes.RECEIVE_AVAILABLE_FILTERS,
            filters : availableFilters
        }
        expect(actions.receiveAvailableFilters(availableFilters)).toEqual(expectedAction);
    });
})
