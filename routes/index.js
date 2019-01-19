const index = module.exports = require('next-routes')();

index
  .add('home', '/')
  .add('seriesList', '/series')
  .add('series', '/series/:id');
