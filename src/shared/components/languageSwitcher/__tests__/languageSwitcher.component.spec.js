import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { createSandbox } from 'sinon';

import { LanguageSwitcher } from '../languageSwitcher.component';
import { Select } from '../languageSwitcher.styles';
import { DEFAULT_LOCALE } from '../../../../i18n';
import routes from '../../../../routes';


describe('LanguageSwitcher: Component', () => {
  const sandbox = createSandbox();
  const defaultProps = {
    language: DEFAULT_LOCALE,
    router: { query: { lang: DEFAULT_LOCALE }, asPath: `/${DEFAULT_LOCALE}/some/custom/url` },
  };

  afterEach(() => {
    sandbox.restore();
  });

  const component = (props) => (
    <LanguageSwitcher {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should redirect after option click', () => {
    sandbox.stub(routes.Router, 'pushRoute');
    const wrapper = shallow(component());

    const event = { target: { value: 'not-default' } };
    wrapper.find(Select).prop('onChange')(event);

    expect(routes.Router.pushRoute).to.have.been.calledOnce;
    expect(routes.Router.pushRoute).to.have.been.calledWith('/not-default/some/custom/url');
  });
});
