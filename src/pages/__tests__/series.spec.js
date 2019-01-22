import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';

import { SeriesPage } from '../series';
import { SeriesActions } from '../../modules/series';


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

  it('should dispatch SeriesActions.fetch in getInitialProps on server', async () => {
    const dispatch = spy();
    const query = { id: '1' };
    const store = global.utils.prepareInitialPropsStore(dispatch);

    await SeriesPage.getInitialProps({ isServer: true, store, query });

    expect(dispatch).to.have.been.calledOnce;
    expect(dispatch).to.have.been.calledWith(SeriesActions.fetchSingle(1));
  });

  it('should dispatch SeriesActions.fetch in getInitialProps on client', async () => {
    const query = { id: '1' };
    const store = {
      dispatch: spy(),
    };

    await SeriesPage.getInitialProps({ isServer: false, store, query });

    expect(store.dispatch).to.have.been.calledOnce;
    expect(store.dispatch).to.have.been.calledWith(SeriesActions.fetchSingle(1));
  });
});
