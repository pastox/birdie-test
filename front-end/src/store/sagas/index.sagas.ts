import { takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes.constants';
import { fetchEvents } from './events.sagas';
import { fetchAvailableFilters } from './filters.sagas';
import { fetchPatients } from './patients.sagas';

function* initSaga() {
  yield takeLatest(actionTypes.REQUEST_EVENTS, fetchEvents);
  yield takeLatest(actionTypes.REQUEST_AVAILABLE_FILTERS, fetchAvailableFilters);
  yield takeLatest(actionTypes.REQUEST_PATIENTS, fetchPatients)
}

export default initSaga;