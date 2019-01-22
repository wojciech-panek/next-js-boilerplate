import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';

import { HomePage } from '../home';
import { SeriesActions } from '../../modules/series/series.redux';


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

  it('should dispatch SeriesActions.fetch in getInitialProps on server', async () => {
    const dispatch = spy();
    const store = global.utils.prepareInitialPropsStore(dispatch);

    await HomePage.getInitialProps({ isServer: true, store });

    expect(dispatch).to.have.been.calledOnce;
    expect(dispatch).to.have.been.calledWith(SeriesActions.fetch());
  });

  it('should dispatch SeriesActions.fetch in getInitialProps on client', async () => {
    const store = {
      dispatch: spy(),
    };

    await HomePage.getInitialProps({ isServer: false, store });

    expect(store.dispatch).to.have.been.calledOnce;
    expect(store.dispatch).to.have.been.calledWith(SeriesActions.fetch());
  });
});
