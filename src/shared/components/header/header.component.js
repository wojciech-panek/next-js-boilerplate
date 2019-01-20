import React, { PureComponent } from 'react';
import { compose } from 'ramda';

import withIntl from '../../lib/withIntl';
import { Container } from './header.styles';


export class Header extends PureComponent {
  static propTypes = {
  };


  render() {
    return (
      <Container>
        Header
      </Container>
    );
  }
}

export default compose(
  withIntl,
)(Header);
