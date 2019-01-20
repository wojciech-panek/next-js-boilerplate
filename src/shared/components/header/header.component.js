import React, { PureComponent } from 'react';
import { compose } from 'ramda';

import withIntl from '../../lib/withIntl';
import { Container } from './header.styles';
import { Paragraph } from '../../../shared/theme/typography';


export class Header extends PureComponent {
  static propTypes = {
  };


  render() {
    return (
      <Container>
        <Paragraph>Header</Paragraph>
      </Container>
    );
  }
}

export default compose(
  withIntl,
)(Header);
