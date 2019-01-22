import React from 'react';
import { shallow } from 'enzyme';

import { Error } from '../_error';


describe('Error: Page', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <Error {...defaultProps} {...props} />
  );

  it('should render correctly with statusCode', () => {
    const wrapper = shallow(component({ statusCode: 400 }));
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly without statusCode', () => {
    const wrapper = shallow(component({ statusCode: null }));
    global.expect(wrapper).toMatchSnapshot();
  });
});
