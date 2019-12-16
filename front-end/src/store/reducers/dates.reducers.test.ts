import * as reducers from './dates.reducers';
import * as actionTypes from '../constants/actionTypes.constants';
import initialState from './initialState';

describe('dates reducers', () => {
  it('should return the initial state', () => {
    expect(reducers.startDate(undefined, {})).toEqual(initialState.startDate);
  });
  it('should return the initial state', () => {
    expect(reducers.endDate(undefined, {})).toEqual(initialState.endDate);
  });
  it('should handle SET_START_DATE', () => {
    const date : string = "2019-05-07T08:01:43.226Z";
    expect(
      reducers.startDate(initialState.startDate, {
        type: actionTypes.SET_START_DATE,
        date
      })
    ).toEqual(date);
  });
  it('should handle SET_END_DATE', () => {
    const date : string = "2019-05-07T08:01:43.226Z";
    expect(
      reducers.endDate(initialState.endDate, {
        type: actionTypes.SET_END_DATE,
        date
      })
    ).toEqual(date);
  });
})