import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';

import withIntl from '../shared/lib/withIntl';
import { Paragraph } from '../shared/theme/typography';


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
      <Paragraph>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </Paragraph>
    );
  }
}

export default compose(
  withIntl,
)(Error);
