import * as actions from './dates.actions';
import * as actionTypes from '../constants/actionTypes.constants';

describe('dates actions', () => {
  it('should create an action to set the start date', () => {
    const date : string = '2019-05-07T08:01:43.226Z';
    const expectedAction = {
      type: actionTypes.SET_START_DATE,
      date
    }
    expect(actions.setStartDate(date)).toEqual(expectedAction);
  });
  it('should create an action to set the end date', () => {
    const date : string = '2019-05-07T08:01:43.226Z';
    const expectedAction = {
      type: actionTypes.SET_END_DATE,
      date
    }
    expect(actions.setEndDate(date)).toEqual(expectedAction);
  });
})
