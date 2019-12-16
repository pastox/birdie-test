import * as reducers from './patients.reducers';
import * as actionTypes from '../constants/actionTypes.constants';
import initialState from './initialState';

describe('patients reducers', () => {
  it('should return the initial state', () => {
    expect(reducers.patientId(undefined, {})).toEqual(initialState.patientId);
  });
  it('should return the initial state', () => {
    expect(reducers.patients(undefined, {})).toEqual(initialState.patients);
  });
  it('should handle RECEIVE_PATIENTS', () => {
    const patients : string[] = ["patientA", "patientB", "patientC"];
    expect(
      reducers.patients(initialState.patients, {
        type: actionTypes.RECEIVE_PATIENTS,
        patients
      })
    ).toEqual(patients);
  });
  it('should handle SET_PATIENT', () => {
    const patient : string = "patientA";
    expect(
      reducers.patientId(initialState.patientId, {
        type: actionTypes.SET_PATIENT,
        id : patient
      })
    ).toEqual(patient);
  });
})