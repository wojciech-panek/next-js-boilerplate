import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';


class Series extends PureComponent {
  static propTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>Series: {this.props.router.query.id}</div>
    );
  }
}

export default withRouter(Series);
