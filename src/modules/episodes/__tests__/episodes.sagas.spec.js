import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import { OK, BAD_REQUEST } from 'http-status-codes';

import { watchEpisodes } from '../episodes.sagas';
import { EpisodesActions, EpisodesTypes } from '../episodes.redux';
import mockApi from '../../../shared/utils/mockApi';


describe('Episodes: sagas', () => {
  const defaultState = fromJS({});

  const getSagaTester = (initialState = {}) => {
    const sagaTester = new SagaTester({
      initialState: defaultState.mergeDeep(initialState),
    });
    sagaTester.start(watchEpisodes);
    return sagaTester;
  };

  it('should dispatch fetchSuccess action after successful API call', async () => {
    const sagaTester = getSagaTester();
    const response = { respProp: 'respValue' };
    mockApi.get('/static/mock-api/episodes.json').reply(OK, response);

    sagaTester.dispatch(EpisodesActions.fetch());
    await sagaTester.waitFor(EpisodesTypes.FETCH_SUCCESS);

    expect(sagaTester.getCalledActions()).to.deep.include(EpisodesActions.fetchSuccess(response));
  });

  it('should dispatch fetchError action after unsuccessful API call', async () => {
    const sagaTester = getSagaTester();
    const language = 'en';
    const response = { errorProp: 'errorValue' };
    mockApi.get('/static/mock-api/episodes.json').reply(BAD_REQUEST, response);

    sagaTester.dispatch(EpisodesActions.fetch(language));
    await sagaTester.waitFor(EpisodesTypes.FETCH_ERROR);

    expect(sagaTester.getCalledActions()).to.deep.include(EpisodesActions.fetchError(response));
  });

  it('should dispatch fetchSingleSuccess action after successful API call', async () => {
    const sagaTester = getSagaTester();
    const id = 1;
    const response = [{ id: 1 }, { id: 2 }];
    const expectedResponse = { id: 1 };
    mockApi.get('/static/mock-api/episodes.json').reply(OK, response);

    sagaTester.dispatch(EpisodesActions.fetchSingle(id));
    await sagaTester.waitFor(EpisodesTypes.FETCH_SINGLE_SUCCESS);

    expect(sagaTester.getCalledActions()).to.deep.include(EpisodesActions.fetchSingleSuccess(expectedResponse));
  });

  it('should dispatch fetchSingleError action after unsuccessful API call', async () => {
    const sagaTester = getSagaTester();
    const id = 1;
    const response = { errorProp: 'errorValue' };
    mockApi.get('/static/mock-api/episodes.json').reply(BAD_REQUEST, response);

    sagaTester.dispatch(EpisodesActions.fetchSingle(id));
    await sagaTester.waitFor(EpisodesTypes.FETCH_SINGLE_ERROR);

    expect(sagaTester.getCalledActions()).to.deep.include(EpisodesActions.fetchSingleError(response));
  });
});
