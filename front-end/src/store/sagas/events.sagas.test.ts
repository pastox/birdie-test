import { fetchEvents } from './events.sagas';
import { call, put } from 'redux-saga/effects';
import { fetchApiEvents } from '../../services/api/events.api.services';
import { requestEvents, receiveEvents } from '../actions/events.actions';
import { setConnexionError } from '../actions/utils.actions';
import Event from '../../models/Event.models';

const patientId = "df50cac5-293c-490d-a06c-ee26796f850d";
const filters = ["fluid_intake_observation", "check_in"];
const startDate = "2019-04-29T00:01:50.774Z";
const endDate = "2019-05-07T08:01:43.226Z";

describe("filters sagas", () => {
    it("should handle exception as expected", () => {
        const generator = fetchEvents(requestEvents(patientId, filters, startDate, endDate));
        expect(generator.next().value).toEqual(call(fetchApiEvents as any, patientId, filters, startDate, endDate));
        expect(generator.throw('error').value).toEqual(put(setConnexionError()));
    });
})