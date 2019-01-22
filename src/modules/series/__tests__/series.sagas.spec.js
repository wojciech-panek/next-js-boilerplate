import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import { OK, BAD_REQUEST } from 'http-status-codes';

import { watchSeries } from '../series.sagas';
import { SeriesActions, SeriesTypes } from '../series.redux';
import mockApi from '../../../shared/utils/mockApi';


describe('Series: sagas', () => {
  const defaultState = fromJS({});

  const getSagaTester = (initialState = {}) => {
    const sagaTester = new SagaTester({
      initialState: defaultState.mergeDeep(initialState),
    });
    sagaTester.start(watchSeries);
    return sagaTester;
  };

  it('should dispatch fetchSuccess action after successful API call', async () => {
    const sagaTester = getSagaTester();
    const response = { respProp: 'respValue' };
    mockApi.get('/static/mock-api/series.json').reply(OK, response);

    sagaTester.dispatch(SeriesActions.fetch());
    await sagaTester.waitFor(SeriesTypes.FETCH_SUCCESS);

    expect(sagaTester.getCalledActions()).to.deep.include(SeriesActions.fetchSuccess(response));
  });

  it('should dispatch fetchError action after unsuccessful API call', async () => {
    const sagaTester = getSagaTester();
    const language = 'en';
    const response = { errorProp: 'errorValue' };
    mockApi.get('/static/mock-api/series.json').reply(BAD_REQUEST, response);

    sagaTester.dispatch(SeriesActions.fetch(language));
    await sagaTester.waitFor(SeriesTypes.FETCH_ERROR);

    expect(sagaTester.getCalledActions()).to.deep.include(SeriesActions.fetchError(response));
  });

  it('should dispatch fetchSingleSuccess action after successful API call', async () => {
    const sagaTester = getSagaTester();
    const id = 1;
    const seriesResponse = [{ id: 1 }, { id: 2 }];
    const episodesResponse = [{ id: 1, series: 1 }, { id: 2, series: 1 }, { id: 3, series: 2 }, { id: 4, series: 2 }];
    const expectedResult = { id: 1, episodes: [{ id: 1, series: 1 }, { id: 2, series: 1 }] };
    mockApi.get('/static/mock-api/series.json').reply(OK, seriesResponse);
    mockApi.get('/static/mock-api/episodes.json').reply(OK, episodesResponse);

    sagaTester.dispatch(SeriesActions.fetchSingle(id));
    await sagaTester.waitFor(SeriesTypes.FETCH_SINGLE_SUCCESS);

    expect(sagaTester.getCalledActions()).to.deep.include(SeriesActions.fetchSingleSuccess(expectedResult));
  });

  it('should dispatch fetchSingleError action after unsuccessful API call', async () => {
    const sagaTester = getSagaTester();
    const response = { errorProp: 'errorValue' };
    mockApi.get('/static/mock-api/series.json').reply(BAD_REQUEST, response);

    sagaTester.dispatch(SeriesActions.fetchSingle());
    await sagaTester.waitFor(SeriesTypes.FETCH_SINGLE_ERROR);

    expect(sagaTester.getCalledActions()).to.deep.include(SeriesActions.fetchSingleError(response));
  });
});
