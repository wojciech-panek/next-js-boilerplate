import React from 'react';
import { shallow } from 'enzyme';

import SeriesList from '../seriesList';


describe('SeriesList: Page', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <SeriesList {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
