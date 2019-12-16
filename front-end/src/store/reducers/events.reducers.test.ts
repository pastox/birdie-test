import * as reducers from './events.reducers';
import * as actionTypes from '../constants/actionTypes.constants';
import initialState from './initialState';
import Event from '../../models/Event.models';

describe('events reducers', () => {
  it('should return the initial state', () => {
    expect(reducers.events(undefined, {})).toEqual(initialState.events);
  });
  it('should handle RECEIVE_EVENTS', () => {
    const events : Event[] = 
        [{id : "id", event_type : "task_completed", visit_id : "visit_id", timestamp : "2019-05-07T08:01:43.226Z", care_recipient_id : "patientId", caregiver_id : "caregiver_id"}];
    expect(
      reducers.events(initialState.events, {
        type: actionTypes.RECEIVE_EVENTS,
        events
      })
    ).toEqual(events);
  });
})