import { call, put } from "redux-saga/effects";
import { receiveAvailableFilters, resetFilters } from "../actions/filters.actions";
import { fetchApiFilters } from "../../services/api/filters.api.services";
import { setConnexionError } from "../actions/utils.actions";

export function* fetchAvailableFilters(action : {type : string}) {
  try {
    const filters = yield call(fetchApiFilters);
    yield put(receiveAvailableFilters(filters));
    yield put(resetFilters(filters));
  } catch (err) {
    yield put(setConnexionError());
  }
}