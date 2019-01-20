import React, { PureComponent } from 'react';
import { compose } from 'ramda';

import withIntl from '../../lib/withIntl';
import { Container } from './footer.styles';


export class Footer extends PureComponent {
  static propTypes = {
  };


  render() {
    return (
      <Container>
        Footer
      </Container>
    );
  }
}

export default compose(
  withIntl,
)(Footer);
