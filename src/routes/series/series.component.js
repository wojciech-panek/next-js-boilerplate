import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Head from 'next/head';

import { Loader } from '../../shared/components/loader';
import { Link } from '../../shared/components/link';
import { H2, H4 } from '../../shared/theme/typography';
import { Container, EpisodesContainer } from './series.styles';
import messages from './series.messages';



export class Series extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    router: PropTypes.object.isRequired,
  };

  getData = () => {
    if (this.props.data.size > 0 && this.props.data.get('id') === parseInt(this.props.router.query.id, 10)) {
      return this.props.data;
    }
    return null;
  };

  renderEpisode = (episode) => {
    return (
      <Link key={episode.get('id')} to={`/episodes/${episode.get('id')}`}>
        <a>[{episode.get('number')}] {episode.get('title')}</a>
      </Link>
    );
  };


  render() {
    const data = this.getData();

    if (!data) {
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

        <H2>{data.get('title')} [<FormattedMessage {...messages.season} />: {data.get('season')}]</H2>

        <H4><FormattedMessage {...messages.episodes} />:</H4>

        <EpisodesContainer>
          {data.get('episodes').toArray().map(this.renderEpisode)}
        </EpisodesContainer>

        <Link to="/">
          <a><FormattedMessage {...messages.back} /></a>
        </Link>
      </Container>
    );
  }
}
