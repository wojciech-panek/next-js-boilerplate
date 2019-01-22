import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { Home } from '../home.component';


describe('Home: Component', () => {
  const defaultProps = {
    series: fromJS([{ id: 1 }, { id: 2 }, { id: 3 }]),
  };

  const component = (props) => (
    <Home {...defaultProps} {...props} />
  );

  const render = (props = {}) => shallow(component(props));

  it('should render correctly  when data is provided', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should render <Loader /> when data is not provided', () => {
    const wrapper = render({ series: fromJS({}) });
    global.expect(wrapper).toMatchSnapshot();
  });
});
