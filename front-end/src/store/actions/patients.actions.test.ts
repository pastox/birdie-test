import * as actions from './patients.actions';
import * as actionTypes from '../constants/actionTypes.constants';


describe('patients actions', () => {
    it('should create an action to set the current patient', () => {
        const patient : string = "patientA";
        const expectedAction = {
            type: actionTypes.SET_PATIENT,
            id : patient
        }
        expect(actions.setPatient(patient)).toEqual(expectedAction);
    });
    it('should create an action to request all the patients', () => {
        const expectedAction = {
            type: actionTypes.REQUEST_PATIENTS,
        }
        expect(actions.requestPatients()).toEqual(expectedAction);
    });
    it('should create an action to receive all the patients', () => {
        const patients : string[] = ["patientA", "patientB", "patientC"];
        const expectedAction = {
            type: actionTypes.RECEIVE_PATIENTS,
            patients
        }
        expect(actions.receivePatients(patients)).toEqual(expectedAction);
    })
})
