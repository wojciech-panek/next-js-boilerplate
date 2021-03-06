import React, { PureComponent } from 'react';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import withIntl from '../shared/lib/withIntl';
import { Series } from '../routes/series';
import { SeriesActions } from '../modules/series/series.redux';


export class SeriesPage extends PureComponent {
  static fetchData(dispatch, query) {
    dispatch(SeriesActions.fetchSingle(parseInt(query.id, 10)));
  }

  static async getInitialProps({ isServer, store, query }) {
    if (isServer) {
      await store.execSagaTasks(isServer, (dispatch) => {
        SeriesPage.fetchData(dispatch, query);
      });
    } else {
      SeriesPage.fetchData(store.dispatch, query);
    }

    return {};
  }

  render() {
    return (
      <Series />
    );
  }
}

export default compose(
  withIntl,
  withRouter,
)(SeriesPage);
