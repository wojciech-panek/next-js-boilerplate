import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import reportError from '../../shared/utils/reportError';
import { MaintainersTypes, MaintainersActions } from './maintainers.redux';

const tmpData = [
  {
    firstName: 'Wojciech',
    lastName: 'Panek',
    email: 'wpanek@apptension.com',
  },
  {
    firstName: 'Patryk',
    lastName: 'Ziemkowski',
    email: 'pziemkowski@apptension.com',
  }
];

export function* fetchMaintainers() {
  try {
    yield delay(1000);

    return yield put(MaintainersActions.fetchSuccess(tmpData));
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
