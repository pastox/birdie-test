import { RECEIVE_EVENTS } from '../constants/actionTypes.constants';
import Event from '../../models/Event.models';
import initialState from './initialState';

export const events = (state : Event[] | null = initialState.events, action : any)  => {
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events
        default:
            return state;
    }
}