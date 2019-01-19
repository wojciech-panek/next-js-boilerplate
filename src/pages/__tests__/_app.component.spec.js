import React from 'react';
import { shallow } from 'enzyme';

import App from '../_app';


describe('App: Page', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <App {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
