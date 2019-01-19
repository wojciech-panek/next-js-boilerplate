import { put, takeLatest } from 'redux-saga/effects';

import reportError from '../../shared/utils/reportError';
import api from '../../shared/services/api';
import { MaintainersTypes, MaintainersActions } from './maintainers.redux';


export function* fetchMaintainers() {
  try {
    const { data } = yield api.get('/static/mock-api/maintainers.json');

    return yield put(MaintainersActions.fetchSuccess(data));
  } catch (e) {
    if (e.response) {
      return yield put(MaintainersActions.fetchError(e.response.data));
    }

    return yield reportError(e);
  }
}

export function* watchMaintainers() {
  try {
    yield takeLatest(MaintainersTypes.FETCH, fetchMaintainers);
  } catch (e) {
    yield reportError(e);
  }
}
