import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS, Map } from 'immutable';


export const { Types: EpisodesTypes, Creators: EpisodesActions } = createActions({
  fetch: [],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
  fetchSingle: ['id'],
  fetchSingleSuccess: ['data'],
  fetchSingleError: ['payload'],
}, { prefix: 'EPISODES_' });

const EpisodesRecord = new Record({
  items: List(),
  data: Map(),
});

export const INITIAL_STATE = new EpisodesRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('items', fromJS(action.data));

const getSingleSuccessHandler = (state = INITIAL_STATE, action) => state.set('data', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [EpisodesTypes.FETCH_SUCCESS]: getSuccessHandler,
  [EpisodesTypes.FETCH_SINGLE_SUCCESS]: getSingleSuccessHandler,
});
