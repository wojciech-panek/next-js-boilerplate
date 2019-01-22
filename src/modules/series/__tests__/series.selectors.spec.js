import { expect } from 'chai';
import { fromJS } from 'immutable';

import { selectSeriesItems, selectSeriesData } from '../series.selectors';


describe('Series: selectors', () => {
  const items = fromJS(['list-item-1', 'list-item-2']);
  const data = fromJS({ id: 1 });

  const mockedState = fromJS({
    series: {
      items,
      data,
    },
  });

  describe('selectSeriesItems', () => {
    it('should select items', () => {
      expect(selectSeriesItems(mockedState)).to.equal(items);
    });
  });

  describe('selectSeriesData', () => {
    it('should select data', () => {
      expect(selectSeriesData(mockedState)).to.equal(data);
    });
  });
});
