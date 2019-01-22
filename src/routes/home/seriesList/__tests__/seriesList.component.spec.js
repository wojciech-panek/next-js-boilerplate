import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { SeriesList } from '../seriesList.component';


describe('SeriesList: Component', () => {
  const defaultProps = {
    items: fromJS([
      { id: 1, title: 'series 1', season: 1 },
      { id: 2, title: 'series 2', season: 1 },
      { id: 3, title: 'series 3', season: 1 },
    ]),
  };

  const component = (props) => (
    <SeriesList {...defaultProps} {...props} />
  );

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
