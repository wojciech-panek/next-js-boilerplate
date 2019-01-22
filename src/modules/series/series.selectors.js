import { createSelector } from 'reselect';


const selectSeriesDomain = state => state.get('series');

export const selectSeriesItems = createSelector(
  selectSeriesDomain, state => state.get('items')
);

export const selectSeriesData = createSelector(
  selectSeriesDomain, state => state.get('data')
);
