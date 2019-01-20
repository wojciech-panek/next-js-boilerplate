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
          <link rel="shortcut icon" href="/static/icons/favicon.ico" />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />

          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" />

          <meta name="theme-color" content="#ffffff" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="manifest" href="/static/manifest.json" />

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
