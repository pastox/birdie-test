import * as actions from './events.actions';
import * as actionTypes from '../constants/actionTypes.constants';
import Event from '../../models/Event.models';

describe('events actions', () => {
    it('should create an action to request the events', () => {
        const patientId = "df50cac5-293c-490d-a06c-ee26796f850d";
        const filters = ["fluid_intake_observation", "check_in"];
        const startDate = "2019-04-29T00:01:50.774Z";
        const endDate = "2019-05-07T08:01:43.226Z";
        const expectedAction = {
            type: actionTypes.REQUEST_EVENTS,
            patientId,
            filters,
            startDate,
            endDate
        }
        expect(actions.requestEvents(patientId, filters, startDate, endDate)).toEqual(expectedAction);
    });
    it('should create an action to receive the events', () => {
        const events : Event[] = 
            [{id : "id", event_type : "task_completed", visit_id : "visit_id", timestamp : "2019-05-07T08:01:43.226Z", care_recipient_id : "patientId", caregiver_id : "caregiver_id"}]
        const expectedAction = {
            type: actionTypes.RECEIVE_EVENTS,
            events
        }
        expect(actions.receiveEvents(events)).toEqual(expectedAction);
    })
})
