import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const styleSheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      styleSheet.collectStyles(<App {...props} />),
    );

    const styleTags = styleSheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="viewport" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
