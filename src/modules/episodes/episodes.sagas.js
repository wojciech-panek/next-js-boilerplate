import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import reportError from '../../shared/utils/reportError';
import api from '../../shared/services/api';
import { EpisodesTypes, EpisodesActions } from './episodes.redux';


export function* fetchEpisodes() {
  try {
    yield delay(1000);
    const { data } = yield api.get('/static/mock-api/episodes.json');

    return yield put(EpisodesActions.fetchSuccess(data));
  } catch (e) {
    if (e.response) {
      return yield put(EpisodesActions.fetchError(e.response.data));
    }

    return yield reportError(e);
  }
}

export function* fetchSingleEpisode({ id }) {
  try {
    yield delay(1000);
    const { data: episodesData } = yield api.get('/static/mock-api/episodes.json');

    const data = episodesData.find((series) => series.id === id);

    return yield put(EpisodesActions.fetchSingleSuccess(data));
  } catch (e) {
    if (e.response) {
      return yield put(EpisodesActions.fetchSingleError(e.response.data));
    }

    return yield reportError(e);
  }
}

export function* watchEpisodes() {
  try {
    yield takeLatest(EpisodesTypes.FETCH, fetchEpisodes);
    yield takeLatest(EpisodesTypes.FETCH_SINGLE, fetchSingleEpisode);
  } catch (e) {
    yield reportError(e);
  }
}
