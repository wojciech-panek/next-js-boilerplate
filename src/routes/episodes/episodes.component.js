import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Head from 'next/head';

import { Loader } from '../../shared/components/loader';
import { Link } from '../../shared/components/link';
import { H2 } from '../../shared/theme/typography';
import { Container } from './episodes.styles';
import messages from './episodes.messages';


export class Episodes extends PureComponent {
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

        <H2>{data.get('title')}</H2>

        <Link to={`/series/${data.get('series')}`}>
          <a><FormattedMessage {...messages.back} /></a>
        </Link>
      </Container>
    );
  }
}
