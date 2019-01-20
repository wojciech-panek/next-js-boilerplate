import React, { PureComponent } from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';

import LogoPNG from '../../images/logo.png';
import LogoSVG from '../../images/icons/logo.svg';
import { H1 } from '../../shared/theme/typography';
import { Container, IconsContainer, Img } from './home.styles';
import messages from './home.messages';


export class Home extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <Container>
        <FormattedMessage {...messages.pageTitle}>
          {pageTitle => (
            <Head>
              <title key="title">{ pageTitle }</title>
            </Head>
          )}
        </FormattedMessage>

        <H1>
          <FormattedMessage {...messages.welcome} />
        </H1>

        <IconsContainer>

          Example images usage:
          <Img src={LogoPNG} alt="" />
          <LogoSVG style={{ width: '25px' }} />
        </IconsContainer>
      </Container>
    );
  }
}
