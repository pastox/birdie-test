import { fetchPatients } from './patients.sagas';
import { call, put } from 'redux-saga/effects';
import { fetchApiPatients } from '../../services/api/patients.api.services';
import { requestPatients, receivePatients } from '../actions/patients.actions';
import { setConnexionError } from '../actions/utils.actions';

describe("filters sagas", () => {
    it("should call the fetch of the available filters and dispatch the RECEIVE_AVAILABLE_FILTERS action and finally also the RESET_FILTERS action", () => {
        const generator = fetchPatients(requestPatients());
        expect(generator.next().value).toEqual(call(fetchApiPatients));
        expect(generator.next().value).toEqual(put(receivePatients(undefined as unknown as string[])));
    });
    it("should handle exception as expected", () => {
        const generator = fetchPatients(requestPatients());
        expect(generator.next().value).toEqual(call(fetchApiPatients));
        expect(generator.throw('error').value).toEqual(put(setConnexionError()));
    })
})