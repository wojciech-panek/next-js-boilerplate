import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';

import withIntl from '../shared/lib/withIntl';


export class Error extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number,
  };

  static getInitialProps({ res, err }) {
    if (res && res.statusCode) {
      return { statusCode: res.statusCode };
    }
    if (err && err.statusCode) {
      return { statusCode: err.statusCode };
    }
    return { statusCode: null };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

export default compose(
  withIntl,
)(Error);
