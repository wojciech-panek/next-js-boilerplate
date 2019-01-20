import React from 'react';
import { shallow } from 'enzyme';

import { SeriesListPage } from '../seriesList';


describe('SeriesList: Page', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <SeriesListPage {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
