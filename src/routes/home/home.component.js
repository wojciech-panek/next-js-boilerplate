import React, { PureComponent } from 'react';
import PropsTypes from 'prop-types';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';

import LogoPNG from '../../images/logo.png';
import LogoSVG from '../../images/icons/logo.svg';
import { H1 } from '../../shared/theme/typography';
import { Loader } from '../../shared/components/loader';
import { SeriesList } from './seriesList';
import { Container, IconsContainer, Img } from './home.styles';
import messages from './home.messages';


export class Home extends PureComponent {
  static propTypes = {
    series: PropsTypes.object.isRequired,
  };

  render() {
    if (!this.props.series.size) {
      return <Loader />;
    }

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

        <SeriesList />
      </Container>
    );
  }
}
