import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../header.component';


describe('Header: Component', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <Header {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
