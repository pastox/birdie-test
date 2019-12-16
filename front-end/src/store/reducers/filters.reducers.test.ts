import * as reducers from './filters.reducers';
import * as actionTypes from '../constants/actionTypes.constants';
import initialState from './initialState';

const filter : string = "check_in";
const filters : string[] = ["task_completed", "regular_medication_taken"];

describe('filters reducers', () => {
  it('should return the initial state', () => {
    expect(reducers.typeFilters(undefined, {})).toEqual(initialState.typeFilters);
  });
  it('should return the initial state', () => {
    expect(reducers.availableTypeFilters(undefined, {})).toEqual(initialState.availableTypeFilters);
  });
  it('should handle ADD_FILTER', () => {
    expect(
      reducers.typeFilters(filters, {
        type: actionTypes.ADD_FILTER,
        filter
      })
    ).toEqual(filters.concat([filter]));
  });
  it('should handle REMOVE_FILTER', () => {
    expect(
      reducers.typeFilters(filters, {
        type: actionTypes.REMOVE_FILTER,
        filter : "task_completed"
      })
    ).toEqual(filters.splice(filters.indexOf("task_completed") - 1, 1));
  });
  it('should handle RESET_FILTERS', () => {
    expect(
      reducers.typeFilters([], {
        type: actionTypes.RESET_FILTERS,
        availableTypeFilters : filters
      })
    ).toEqual(filters);
  });
  it('should handle REMOVE_ALL_FILTERS', () => {
    expect(
      reducers.typeFilters(filters, {
        type: actionTypes.REMOVE_ALL_FILTERS,
      })
    ).toEqual([]);
  });
  it('should handle RECEIVE_AVAILABLE_FILTERS', () => {
    expect(
      reducers.availableTypeFilters(initialState.availableTypeFilters, {
        type: actionTypes.RECEIVE_AVAILABLE_FILTERS,
        filters
      })
    ).toEqual(filters);
  });
})