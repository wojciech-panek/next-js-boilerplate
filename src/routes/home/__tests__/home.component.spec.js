import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../home.component';


describe('Home: Component', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <Home {...defaultProps} {...props} />
  );

  it('should render Home root', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
