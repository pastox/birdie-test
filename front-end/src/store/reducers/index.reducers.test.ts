import * as eventsReducers from './events.reducers';
import * as filterReducers from './filters.reducers';
import * as patientsReducers from './patients.reducers';
import * as utilsReducers from './utils.reducers';
import * as datesReducers from './dates.reducers';
import { rootReducer } from './index.reducers';
import { createStore } from 'redux';
import * as actionTypes from '../constants/actionTypes.constants';

describe('root reducer', () => {
    it('initial state of root reducer should match what child reducers return given an empty action', () => {
        const store = createStore(rootReducer);
        expect(store.getState().events).toEqual(eventsReducers.events(undefined, {}));
        expect(store.getState().availableTypeFilters).toEqual(filterReducers.availableTypeFilters(undefined, {}));
        expect(store.getState().typeFilters).toEqual(filterReducers.typeFilters(undefined, {}));
        expect(store.getState().patientId).toEqual(patientsReducers.patientId(undefined, {}));
        expect(store.getState().patients).toEqual(patientsReducers.patients(undefined, {}));
        expect(store.getState().connexionError).toEqual(utilsReducers.connexionError(undefined, {}));
        expect(store.getState().startDate).toEqual(datesReducers.startDate(undefined, {}));
        expect(store.getState().endDate).toEqual(datesReducers.endDate(undefined, {}));
    });
    it('checks that child reducers handled the dispatch of the action all right', () => {
        const store = createStore(rootReducer);
        const action = {type : actionTypes.ADD_FILTER, filter : "new filter"}
        store.dispatch(action);
        expect(store.getState().events).toEqual(eventsReducers.events(undefined, action));
        expect(store.getState().availableTypeFilters).toEqual(filterReducers.availableTypeFilters(undefined, action));
        expect(store.getState().typeFilters).toEqual(filterReducers.typeFilters(undefined, action));
        expect(store.getState().patientId).toEqual(patientsReducers.patientId(undefined, action));
        expect(store.getState().patients).toEqual(patientsReducers.patients(undefined, action));
        expect(store.getState().connexionError).toEqual(utilsReducers.connexionError(undefined, action));
        expect(store.getState().startDate).toEqual(datesReducers.startDate(undefined, action));
        expect(store.getState().endDate).toEqual(datesReducers.endDate(undefined, action));
    });
})