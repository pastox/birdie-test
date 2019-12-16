import * as actions from './utils.actions';
import * as actionTypes from '../constants/actionTypes.constants';


describe('utils actions', () => {
    it('should create an action to set the connexionError state to true', () => {
        const expectedAction = {
            type: actionTypes.SET_CONNEXION_ERROR,
        }
        expect(actions.setConnexionError()).toEqual(expectedAction);
    })
})