const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withImages = require('next-images');
const ramda = require('ramda');

module.exports = ramda.compose(
  withImages,
)({
  distDir: '../dist',
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
});
