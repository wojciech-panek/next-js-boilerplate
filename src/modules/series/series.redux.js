import { createActions, createReducer } from 'reduxsauce';
import { Record, List, Map, fromJS } from 'immutable';


export const { Types: SeriesTypes, Creators: SeriesActions } = createActions({
  fetch: [],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
  fetchSingle: ['id'],
  fetchSingleSuccess: ['data'],
  fetchSingleError: ['payload'],
}, { prefix: 'SERIES_' });

const SeriesRecord = new Record({
  items: List(),
  data: Map(),
});

export const INITIAL_STATE = new SeriesRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('items', fromJS(action.data));

const getSingleSuccessHandler = (state = INITIAL_STATE, action) => state.set('data', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [SeriesTypes.FETCH_SUCCESS]: getSuccessHandler,
  [SeriesTypes.FETCH_SINGLE_SUCCESS]: getSingleSuccessHandler,
});
