import { createSelector } from 'reselect';


const selectEpisodesDomain = state => state.get('episodes');

export const selectEpisodesItems = createSelector(
  selectEpisodesDomain, state => state.get('items')
);

export const selectEpisodesData = createSelector(
  selectEpisodesDomain, state => state.get('data')
);
