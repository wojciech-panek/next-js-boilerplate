import React, { Fragment } from 'react';
import NextApp, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { compose } from 'ramda';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { IntlProvider } from 'react-intl';
import { withRouter } from 'next/router';

import configureStore from '../modules/store';
import { LocalesActions } from '../modules/locales';
import { LanguageSwitcher } from '../shared/components/languageSwitcher';
import { Footer } from '../shared/components/footer';
import { Header } from '../shared/components/header';
import { translationMessages, DEFAULT_LOCALE } from '../i18n';


class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const initialNow = Date.now();
    const locale = ctx.query.lang || DEFAULT_LOCALE;

    await ctx.store.execSagaTasks(ctx.isServer, (dispatch) => {
      dispatch(LocalesActions.setLanguage(locale));
    });

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, initialNow, locale };
  }

  render() {
    const { Component, pageProps, initialNow, locale, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <IntlProvider
            locale={locale}
            messages={translationMessages[locale]}
            initialNow={initialNow}
          >
            <Fragment>
              <Header />

              <Component {...pageProps} />

              <LanguageSwitcher />

              <Footer />
            </Fragment>
          </IntlProvider>
        </Provider>
      </Container>
    );
  }
}

export default compose(
  withRouter,
  withRedux(configureStore, {
    serializeState: (state) => state.toJS(),
    deserializeState: (state) => fromJS(state),
  }),
)(App);
