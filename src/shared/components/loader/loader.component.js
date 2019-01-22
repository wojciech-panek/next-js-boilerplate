import React, { PureComponent } from 'react';
import { compose } from 'ramda';

import withIntl from '../../lib/withIntl';
import { Container } from './loader.styles';


export class Loader extends PureComponent {
  static propTypes = {
  };


  render() {
    return (
      <Container>Loading...</Container>
    );
  }
}

export default compose(
  withIntl,
)(Loader);
