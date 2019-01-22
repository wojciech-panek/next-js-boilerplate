import { combineReducers } from 'redux-immutable';

import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as seriesReducer } from './series/series.redux';
import { reducer as episodesReducer } from './episodes/episodes.redux';
//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    series: seriesReducer,
    episodes: episodesReducer,
    locales: localesReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
