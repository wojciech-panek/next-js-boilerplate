import React from 'react';
import { shallow } from 'enzyme';

import Document from '../_document';


describe('Document: Page', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <Document {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
