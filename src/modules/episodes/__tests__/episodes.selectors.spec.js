import { expect } from 'chai';
import { fromJS } from 'immutable';

import { selectEpisodesItems, selectEpisodesData } from '../episodes.selectors';


describe('Episodes: selectors', () => {
  const items = fromJS(['list-item-1', 'list-item-2']);
  const data = fromJS({ id: 1 });

  const mockedState = fromJS({
    episodes: {
      items,
      data,
    },
  });

  describe('selectEpisodesItems', () => {
    it('should select items', () => {
      expect(selectEpisodesItems(mockedState)).to.equal(items);
    });
  });

  describe('selectEpisodesData', () => {
    it('should select data', () => {
      expect(selectEpisodesData(mockedState)).to.equal(data);
    });
  });
});
