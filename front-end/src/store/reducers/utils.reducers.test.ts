import * as reducers from './utils.reducers';
import * as actionTypes from '../constants/actionTypes.constants';
import initialState from './initialState';

describe('patients reducers', () => {
  it('should return the initial state', () => {
    expect(reducers.connexionError(undefined, {})).toEqual(initialState.connexionError);
  });
  it('should handle SET_CONNEXION_ERROR', () => {
    expect(
      reducers.connexionError(initialState.connexionError, {
        type: actionTypes.SET_CONNEXION_ERROR
      })
    ).toEqual(true);
  });
})