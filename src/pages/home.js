import React, { PureComponent } from 'react';

import { Home } from '../routes/home';
import { MaintainersActions } from '../modules/maintainers/maintainers.redux';


export default class HomePage extends PureComponent {
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
