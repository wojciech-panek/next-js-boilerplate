import React, { PureComponent } from 'react';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import withIntl from '../shared/lib/withIntl';


export class SeriesListPage extends PureComponent {
  render() {
    return (
      <div>Series List</div>
    );
  }
}

export default compose(
  withIntl,
  withRouter,
)(SeriesListPage);
