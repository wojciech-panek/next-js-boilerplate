import { expect } from 'chai';
import { fromJS } from 'immutable';

import { reducer as seriesReducer, SeriesActions, SeriesTypes } from '../series.redux';


describe('Series: redux', () => {
  const state = fromJS({
    items: [],
    data: {},
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(seriesReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(seriesReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });

    it('should set data on FETCH_SUCCESS', () => {
      const data = ['object-1', 'object-2'];
      const expectedState = state.set('items', data);
      const action = { data, type: SeriesTypes.FETCH_SUCCESS };
      expect(seriesReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });

    it('should set data on FETCH_SINGLE_SUCCESS', () => {
      const data = { id: 1 };
      const expectedState = state.set('data', data);
      const action = { data, type: SeriesTypes.FETCH_SINGLE_SUCCESS };
      expect(seriesReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });
  });

  describe('fetch', () => {
    it('should return correct type', () => {
      expect(SeriesActions.fetch().type).to.equal(SeriesTypes.FETCH);
    });
  });

  describe('fetchSuccess', () => {
    it('should return correct type', () => {
      expect(SeriesActions.fetchSuccess().type).to.equal(SeriesTypes.FETCH_SUCCESS);
    });

    it('should return proper payload', () => {
      const data = { key: 'value' };
      expect(SeriesActions.fetchSuccess(data).data).to.equal(data);
    });
  });

  describe('fetchError', () => {
    it('should return correct type', () => {
      expect(SeriesActions.fetchError().type).to.equal(SeriesTypes.FETCH_ERROR);
    });

    it('should return proper payload', () => {
      const error = { prop: 'value' };
      expect(SeriesActions.fetchError(error).payload).to.equal(error);
    });
  });

  describe('fetchSingle', () => {
    it('should return correct type', () => {
      expect(SeriesActions.fetchSingle().type).to.equal(SeriesTypes.FETCH_SINGLE);
    });

    it('should return proper payload', () => {
      const id = 1;
      expect(SeriesActions.fetchSingle(id).id).to.equal(id);
    });
  });

  describe('fetchSingleSuccess', () => {
    it('should return correct type', () => {
      expect(SeriesActions.fetchSingleSuccess().type).to.equal(SeriesTypes.FETCH_SINGLE_SUCCESS);
    });

    it('should return proper payload', () => {
      const data = { key: 'value' };
      expect(SeriesActions.fetchSingleSuccess(data).data).to.equal(data);
    });
  });

  describe('fetchSingleError', () => {
    it('should return correct type', () => {
      expect(SeriesActions.fetchSingleError().type).to.equal(SeriesTypes.FETCH_SINGLE_ERROR);
    });

    it('should return proper payload', () => {
      const error = { prop: 'value' };
      expect(SeriesActions.fetchSingleError(error).payload).to.equal(error);
    });
  });
});
