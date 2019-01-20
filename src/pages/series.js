import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { compose } from 'ramda';

import withIntl from '../shared/lib/withIntl';


export class SeriesPage extends PureComponent {
  static propTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>Series: {this.props.router.query.id}</div>
    );
  }
}

export default compose(
  withIntl,
  withRouter,
)(SeriesPage);
