import { RootState } from './index.reducers';

export default  {
    events : null,
    startDate : new Date(2019, 3, 23).toISOString(),
    endDate : new Date(2019, 4, 13).toISOString(),
    patientId : "",
    typeFilters : [],
    availableTypeFilters : [],
    patients : [],
    connexionError : false
} as RootState;
