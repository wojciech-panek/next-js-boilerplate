import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import reportError from '../../shared/utils/reportError';
import api from '../../shared/services/api';
import { SeriesTypes, SeriesActions } from './series.redux';


export function* fetchSeries() {
  try {
    yield delay(1000);
    const { data } = yield api.get('/static/mock-api/series.json');

    return yield put(SeriesActions.fetchSuccess(data));
  } catch (e) {
    if (e.response) {
      return yield put(SeriesActions.fetchError(e.response.data));
    }

    return yield reportError(e);
  }
}

export function* fetchSingleSeries({ id }) {
  try {
    yield delay(1000);
    const { data: seriesData } = yield api.get('/static/mock-api/series.json');
    const { data: episodesData } = yield api.get('/static/mock-api/episodes.json');

    const data = seriesData.find((series) => series.id === id);
    data.episodes = episodesData.filter((episide) => episide.series === id);

    return yield put(SeriesActions.fetchSingleSuccess(data));
  } catch (e) {
    if (e.response) {
      return yield put(SeriesActions.fetchSingleError(e.response.data));
    }

    return yield reportError(e);
  }
}

export function* watchSeries() {
  try {
    yield takeLatest(SeriesTypes.FETCH, fetchSeries);
    yield takeLatest(SeriesTypes.FETCH_SINGLE, fetchSingleSeries);
  } catch (e) {
    yield reportError(e);
  }
}
