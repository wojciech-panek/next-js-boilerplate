import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link as NextLink } from '../../../routes';
import { DEFAULT_LOCALE } from '../../../i18n';


export class Link extends PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    intl: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };


  render() {
    const { to, language, intl, router, ...restOfProps } = this.props; //eslint-disable-line no-unused-vars

    let toWithLocale = to;
    if (language !== DEFAULT_LOCALE) {
      toWithLocale = `/${language}${toWithLocale}`;
    }

    return (
      <NextLink {...restOfProps} to={toWithLocale}>{this.props.children}</NextLink>
    );
  }
}
