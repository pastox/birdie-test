import { combineReducers } from 'redux';
import Event from '../../models/Event.models';
import { typeFilters, availableTypeFilters } from './filters.reducers';
import { patientId, patients } from './patients.reducers';
import { startDate, endDate } from './dates.reducers';
import { connexionError } from './utils.reducers';
import { events } from './events.reducers';

export type RootState = Readonly<{
    events : Event[] | null,
    startDate : string,
    endDate : string,
    patientId : string,
    typeFilters : string[],
    availableTypeFilters : string[],
    patients : string[],
    connexionError : boolean
}>;

export const rootReducer = combineReducers<RootState>({
    typeFilters,
    availableTypeFilters,
    patientId,
    patients,
    startDate,
    endDate,
    events,
    connexionError
});