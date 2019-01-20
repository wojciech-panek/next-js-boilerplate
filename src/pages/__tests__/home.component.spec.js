import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';

import { HomePage } from '../home';
import { MaintainersActions } from '../../modules/maintainers/maintainers.redux';


describe('Home: Page', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <HomePage {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch MaintainersActions.fetch in getInitialProps', async () => {
    const dispatch = spy();
    const store = global.utils.prepareInitialPropsStore(dispatch);

    await HomePage.getInitialProps({ store });

    expect(dispatch).to.have.been.calledOnce;
    expect(dispatch).to.have.been.calledWith(MaintainersActions.fetch());
  });
});
