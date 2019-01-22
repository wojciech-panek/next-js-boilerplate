import React, { PureComponent } from 'react';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import withIntl from '../shared/lib/withIntl';
import { Episodes } from '../routes/episodes';
import { EpisodesActions } from '../modules/episodes';


export class EpisodesPage extends PureComponent {
  static fetchData(dispatch, query) {
    dispatch(EpisodesActions.fetchSingle(parseInt(query.id, 10)));
  }

  static async getInitialProps({ isServer, store, query }) {
    if (isServer) {
      await store.execSagaTasks(isServer, (dispatch) => {
        EpisodesPage.fetchData(dispatch, query);
      });
    } else {
      EpisodesPage.fetchData(store.dispatch, query);
    }

    return {};
  }

  render() {
    return (
      <Episodes />
    );
  }
}

export default compose(
  withIntl,
  withRouter,
)(EpisodesPage);
