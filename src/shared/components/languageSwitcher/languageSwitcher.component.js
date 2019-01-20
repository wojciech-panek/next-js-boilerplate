import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Select, Container } from './languageSwitcher.styles';
import { appLocales, DEFAULT_LOCALE } from '../../../i18n';
import { Router } from '../../../routes';


export class LanguageSwitcher extends PureComponent {
  static propTypes = {
    language: PropTypes.string.isRequired,
    router: PropTypes.object.isRequired,
  };

  handleChange = (e) => {
    const currentLanguageCode = this.props.router.query.lang ? `/${this.props.router.query.lang}` : '';
    const targetLanguageCode = e.target.value === DEFAULT_LOCALE ? '' : `/${e.target.value}`;
    let targetUrl = this.props.router.asPath.replace(currentLanguageCode, targetLanguageCode).replace(/\/$/, '');

    if (!targetUrl.length) {
      targetUrl = '/';
    }

    Router.pushRoute(targetUrl);
  };

  render() {
    return (
      <Container>
        <Select value={this.props.language} onChange={this.handleChange}>
          {appLocales.map((locale, index) => (
            <option key={index} value={locale}>{locale}</option>
          ))}
        </Select>
      </Container>
    );
  }
}
