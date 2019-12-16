import { call, put } from "redux-saga/effects";
import { receivePatients } from "../actions/patients.actions";
import { fetchApiPatients } from "../../services/api/patients.api.services";
import { setConnexionError } from "../actions/utils.actions";

export function* fetchPatients(action : {type : string}) {
  try {
    const patients = yield call(fetchApiPatients);
    yield put(receivePatients(patients));
  } catch (err) {
    yield put(setConnexionError());
  }
}