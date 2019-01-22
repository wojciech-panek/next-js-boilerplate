import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';

import { EpisodesPage } from '../episodes';
import { EpisodesActions } from '../../modules/episodes';


describe('EpisodesPage: Page', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <EpisodesPage {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch EpisodesActions.fetchSingle in getInitialProps on server', async () => {
    const dispatch = spy();
    const query = { id: '1' };
    const store = global.utils.prepareInitialPropsStore(dispatch);

    await EpisodesPage.getInitialProps({ isServer: true, store, query });

    expect(dispatch).to.have.been.calledOnce;
    expect(dispatch).to.have.been.calledWith(EpisodesActions.fetchSingle(1));
  });

  it('should dispatch EpisodesActions.fetchSingle in getInitialProps on client', async () => {
    const query = { id: '1' };
    const store = {
      dispatch: spy(),
    };

    await EpisodesPage.getInitialProps({ isServer: false, store, query });

    expect(store.dispatch).to.have.been.calledOnce;
    expect(store.dispatch).to.have.been.calledWith(EpisodesActions.fetchSingle(1));
  });
});
