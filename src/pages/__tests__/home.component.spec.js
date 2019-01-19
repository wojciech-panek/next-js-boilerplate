import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';

import Home from '../home';
import { MaintainersActions } from '../../modules/maintainers/maintainers.redux';


describe('Home: Page', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <Home {...defaultProps} {...props} />
  );

  it('should render Home root', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch MaintainersActions.fetch in getInitialProps', async () => {
    const dispatch = spy();
    const store = global.utils.prepareInitialPropsStore(dispatch);

    await Home.getInitialProps({ store });

    expect(dispatch).to.have.been.calledOnce;
    expect(dispatch).to.have.been.calledWith(MaintainersActions.fetch());
  });
});
