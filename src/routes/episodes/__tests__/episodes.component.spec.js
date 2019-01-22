import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { Episodes } from '../episodes.component';


describe('Episodes: Component', () => {
  const defaultProps = {
    data: fromJS({ id: 1, series: 1, title: 'example episode title' }),
    router: { query: { id: 1 } },
  };

  const component = (props) => (
    <Episodes {...defaultProps} {...props} />
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
