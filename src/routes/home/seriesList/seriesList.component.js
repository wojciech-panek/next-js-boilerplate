import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Container, ItemsContainer } from './seriesList.styles';
import messages from './seriesList.messages';
import { H2 } from '../../../shared/theme/typography';
import { Link } from '../../../shared/components/link';


export class SeriesList extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
  };

  renderSeriesItem = (item) => {
    return (
      <Link key={item.get('id')} to={`/series/${item.get('id')}`}>
        <a>{item.get('title')} [<FormattedMessage {...messages.season} />: {item.get('season')}]</a>
      </Link>
    );
  };

  render() {
    return (
      <Container>
        <H2>
          <FormattedMessage {...messages.title} />:
        </H2>

        <ItemsContainer>
          {this.props.items.toArray().map(this.renderSeriesItem)}
        </ItemsContainer>
      </Container>
    );
  }
}
