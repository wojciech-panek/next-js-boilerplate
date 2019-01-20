import React, { PureComponent } from 'react';
import { compose } from 'ramda';

import withIntl from '../shared/lib/withIntl';
import { Home } from '../routes/home';
import { MaintainersActions } from '../modules/maintainers/maintainers.redux';


export class HomePage extends PureComponent {
  static async getInitialProps({ isServer, store }) {
    await store.execSagaTasks(isServer, (dispatch) => {
      dispatch(MaintainersActions.fetch());
    });

    return {};
  }

  render() {
    return <Home />;
  }
}

export default compose(
  withIntl,
)(HomePage);
