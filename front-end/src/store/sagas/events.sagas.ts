import { call, put } from "redux-saga/effects";
import { receiveEvents } from "../actions/events.actions";
import { fetchApiEvents } from "../../services/api/events.api.services";
import Event from "../../models/Event.models";
import { setConnexionError } from "../actions/utils.actions";

export function* fetchEvents(action : any) {
  try {
    const events = yield call(fetchApiEvents, action.patientId, action.filters, action.startDate, action.endDate);
    const flatEvents : Event[] = events.flat().map((e : any) => JSON.parse(e.toString()));
    yield put(receiveEvents(flatEvents));
  } catch (err) {
    console.log(err);
    yield put(setConnexionError());
  }
}