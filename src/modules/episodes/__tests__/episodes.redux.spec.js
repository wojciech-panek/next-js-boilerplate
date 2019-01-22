import { expect } from 'chai';
import { fromJS } from 'immutable';

import { reducer as episodesReducer, EpisodesActions, EpisodesTypes } from '../episodes.redux';


describe('Episodes: redux', () => {
  const state = fromJS({
    items: [],
    data: {},
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(episodesReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(episodesReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });

    it('should set data on FETCH_SUCCESS', () => {
      const data = ['object-1', 'object-2'];
      const expectedState = state.set('items', data);
      const action = { data, type: EpisodesTypes.FETCH_SUCCESS };
      expect(episodesReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });

    it('should set data on FETCH_SINGLE_SUCCESS', () => {
      const data = { id: 1 };
      const expectedState = state.set('data', data);
      const action = { data, type: EpisodesTypes.FETCH_SINGLE_SUCCESS };
      expect(episodesReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });
  });

  describe('fetch', () => {
    it('should return correct type', () => {
      expect(EpisodesActions.fetch().type).to.equal(EpisodesTypes.FETCH);
    });
  });

  describe('fetchSuccess', () => {
    it('should return correct type', () => {
      expect(EpisodesActions.fetchSuccess().type).to.equal(EpisodesTypes.FETCH_SUCCESS);
    });

    it('should return proper payload', () => {
      const data = { key: 'value' };
      expect(EpisodesActions.fetchSuccess(data).data).to.equal(data);
    });
  });

  describe('fetchError', () => {
    it('should return correct type', () => {
      expect(EpisodesActions.fetchError().type).to.equal(EpisodesTypes.FETCH_ERROR);
    });

    it('should return proper payload', () => {
      const error = { prop: 'value' };
      expect(EpisodesActions.fetchError(error).payload).to.equal(error);
    });
  });

  describe('fetchSingle', () => {
    it('should return correct type', () => {
      expect(EpisodesActions.fetchSingle().type).to.equal(EpisodesTypes.FETCH_SINGLE);
    });

    it('should return proper payload', () => {
      const id = 1;
      expect(EpisodesActions.fetchSingle(id).id).to.equal(id);
    });
  });

  describe('fetchSingleSuccess', () => {
    it('should return correct type', () => {
      expect(EpisodesActions.fetchSingleSuccess().type).to.equal(EpisodesTypes.FETCH_SINGLE_SUCCESS);
    });

    it('should return proper payload', () => {
      const data = { key: 'value' };
      expect(EpisodesActions.fetchSingleSuccess(data).data).to.equal(data);
    });
  });

  describe('fetchSingleError', () => {
    it('should return correct type', () => {
      expect(EpisodesActions.fetchSingleError().type).to.equal(EpisodesTypes.FETCH_SINGLE_ERROR);
    });

    it('should return proper payload', () => {
      const error = { prop: 'value' };
      expect(EpisodesActions.fetchSingleError(error).payload).to.equal(error);
    });
  });
});
