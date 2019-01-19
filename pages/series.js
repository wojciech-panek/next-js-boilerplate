import React, { PureComponent } from 'react';
import { withRouter } from 'next/router'


class Series extends PureComponent {
  render () {
    return (
      <div>Series: {this.props.router.query.id}</div>
    )
  }
}

export default withRouter(Series);
