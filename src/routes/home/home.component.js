import React, { PureComponent } from 'react';
import Head from 'next/head';

import LogoPNG from '../../images/logo.png';
import LogoSVG from '../../images/icons/logo.svg';
import { Container, Img } from './home.styles';


export class Home extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <Container>
        <Head>
          <title key="title">Homepage</title>
        </Head>
        Homepage

        <Img src={LogoPNG} alt="" />
        <LogoSVG style={{ width: '100px' }} />
      </Container>
    );
  }
}
