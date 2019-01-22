import React from 'react';
import { shallow } from 'enzyme';

import { Link } from '../link.component';
import { DEFAULT_LOCALE } from '../../../../i18n';


describe('Link: Component', () => {
  const defaultProps = {
    intl: {},
    router: {},
  };

  const component = (props) => (
    <Link {...defaultProps} {...props}>link</Link>
  );

  it('should render correctly for DEFAULT_LANGUAGE link', () => {
    const wrapper = shallow(component({ language: DEFAULT_LOCALE, to: '/example/nested/url' }));
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly for non DEFAULT_LANGUAGE link', () => {
    const wrapper = shallow(component({ language: 'language', to: '/example/nested/url' }));
    global.expect(wrapper).toMatchSnapshot();
  });
});
