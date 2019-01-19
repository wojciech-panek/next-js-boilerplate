import React from 'react';
import { shallow } from 'enzyme';

import Series from '../series';


describe('Series: Page', () => {
  const defaultProps = {
    router: { query: { id: 'test-id' } },
  };

  const component = (props) => (
    <Series {...defaultProps} {...props} />
  );

  it('should render Series root', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
