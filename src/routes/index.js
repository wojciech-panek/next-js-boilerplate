const index = module.exports = require('next-routes')();
const i18n = require('../i18n');

const appLocalesWithoutDefault = i18n.appLocales.filter((locale) => locale !== i18n.DEFAULT_LOCALE);
let langParam = '';
if (appLocalesWithoutDefault.length) {
  langParam += `/:lang(${appLocalesWithoutDefault.join('|')})?`;
}

index
  .add('home', `${langParam}`)
  .add('seriesList', `${langParam}/series`)
  .add('series', `${langParam}/series`);
