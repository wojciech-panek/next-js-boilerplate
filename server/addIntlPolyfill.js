const areIntlLocalesSupported = require('intl-locales-supported');
const i18n = require('../src/i18n');

module.exports = function () {
  if (global.Intl) {
    if (!areIntlLocalesSupported(i18n.appLocales)) {
      require('intl');
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  } else {
    global.Intl = require('intl');
  }
};
