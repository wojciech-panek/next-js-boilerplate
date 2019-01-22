import React, { PureComponent } from 'react';
import { compose } from 'ramda';

import withIntl from '../shared/lib/withIntl';
import { Home } from '../routes/home';
import { SeriesActions } from '../modules/series/series.redux';


export class HomePage extends PureComponent {
  static fetchData(dispatch) {
    dispatch(SeriesActions.fetch());
  }

  static async getInitialProps({ isServer, store }) {
    if (isServer) {
      await store.execSagaTasks(isServer, (dispatch) => {
        HomePage.fetchData(dispatch);
      });
    } else {
      HomePage.fetchData(store.dispatch);
    }

    return {};
  }

  render() {
    return <Home />;
  }
}

export default compose(
  withIntl,
)(HomePage);
