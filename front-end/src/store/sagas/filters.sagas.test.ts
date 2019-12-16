import { fetchAvailableFilters } from './filters.sagas';
import * as actionTypes from '../constants/actionTypes.constants';
import { call, put, take } from 'redux-saga/effects';
import { fetchApiFilters } from '../../services/api/filters.api.services';
import { requestAvailableFilters, receiveAvailableFilters, resetFilters } from '../actions/filters.actions';
import { setConnexionError } from '../actions/utils.actions';

describe("filters sagas", () => {
    it("should call the fetch of the available filters and dispatch the RECEIVE_AVAILABLE_FILTERS action and finally also the RESET_FILTERS action", () => {
        const generator = fetchAvailableFilters(requestAvailableFilters());
        expect(generator.next().value).toEqual(call(fetchApiFilters));
        expect(generator.next().value).toEqual(put(receiveAvailableFilters(undefined as unknown as string[])));
        expect(generator.next().value).toEqual(put(resetFilters(undefined as unknown as string[])));
    });
    it("should handle exception as expected", () => {
        const generator = fetchAvailableFilters(requestAvailableFilters());
        expect(generator.next().value).toEqual(call(fetchApiFilters));
        expect(generator.throw('error').value).toEqual(put(setConnexionError()));
    })
})