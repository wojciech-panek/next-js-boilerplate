import React, { PureComponent } from 'react';
import { compose } from 'ramda';

import withIntl from '../../lib/withIntl';
import { Container } from './footer.styles';
import { Paragraph } from '../../../shared/theme/typography';


export class Footer extends PureComponent {
  static propTypes = {
  };


  render() {
    return (
      <Container>
        <Paragraph>Footer</Paragraph>
      </Container>
    );
  }
}

export default compose(
  withIntl,
)(Footer);
