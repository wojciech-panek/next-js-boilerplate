import { all, fork } from 'redux-saga/effects';

import reportError from '../shared/utils/reportError';
import { watchSeries } from './series/series.sagas';
import { watchEpisodes } from './episodes/episodes.sagas';
//<-- IMPORT MODULE SAGA -->


export default function* rootSaga() {
  try {
    yield all([
      fork(watchSeries),
      fork(watchEpisodes),
      //<-- INJECT MODULE SAGA -->
    ]);
  } catch (e) {
    yield reportError(e);
  }
}
