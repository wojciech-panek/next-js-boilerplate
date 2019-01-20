import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '../footer.component';


describe('Footer: Component', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <Footer {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
