import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { Series } from '../series.component';


describe('Series: Component', () => {
  const defaultProps = {
    router: { query: { id: 1 } },
    data: fromJS({
      id: 1,
      title: 'example series title',
      episodes: [
        { id: 1, number: 1, title: 'example episode title 1' },
        { id: 2, number: 2, title: 'example episode title 2' },
        { id: 3, number: 3, title: 'example episode title 3' },
      ],
    }),
  };

  const component = (props) => (
    <Series {...defaultProps} {...props} />
  );

  const render = (props = {}) => shallow(component(props));

  it('should render correctly when data is provided', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should render <Loader /> when data is not provided', () => {
    const wrapper = render({ data: fromJS({}) });
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should render <Loader /> when data does not match', () => {
    const wrapper = render({ router: { query: { id: 2 } } });
    global.expect(wrapper).toMatchSnapshot();
  });
});
