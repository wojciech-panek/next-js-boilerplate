import React from 'react';
import { shallow } from 'enzyme';

import { Loader } from '../loader.component';


describe('Loader: Component', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <Loader {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
