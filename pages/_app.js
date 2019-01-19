import React from 'react';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { compose } from 'ramda';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import configureStore from '../modules/store';


class CustomApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          Header
          <Component {...pageProps} />
          Footer
        </Provider>
      </Container>
    )
  }
}

export default compose(
  withRedux(configureStore, {
    serializeState: (state) => state.toJS(),
    deserializeState: (state) => fromJS(state),
  }),
)(CustomApp);
