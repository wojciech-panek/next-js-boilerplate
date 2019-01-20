import React from 'react';
import { shallow } from 'enzyme';

import { SeriesPage } from '../series';


describe('Series: Page', () => {
  const defaultProps = {
    router: { query: { id: 'test-id' } },
  };

  const component = (props) => (
    <SeriesPage {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
