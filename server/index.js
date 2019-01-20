const next = require('next');
const express = require('express');

const routes = require('../src/routes');
const addIntlPolyfill = require('./addIntlPolyfill');


addIntlPolyfill();

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src',
});
const handler = routes.getRequestHandler(app);


app.prepare().then(() => {
  express().use(handler).listen(3000);
});
