const addLocaleData = require('react-intl').addLocaleData;
const enLocaleData = require('react-intl/locale-data/en');
const plLocaleData = require('react-intl/locale-data/pl');

const enTranslationMessages = require('./translations/en.json');
const plTranslationMessages = require('./translations/pl.json');

const LOCALES = {
  ENGLISH: 'en',
  POLISH: 'pl',
};

const DEFAULT_LOCALE = LOCALES.ENGLISH;

const appLocales = [
  LOCALES.ENGLISH,
  LOCALES.POLISH,
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

const translationMessages = {
  [LOCALES.ENGLISH]: formatTranslationMessages(LOCALES.ENGLISH, enTranslationMessages),
  [LOCALES.POLISH]: formatTranslationMessages(LOCALES.POLISH, plTranslationMessages),
};

if (typeof window !== 'undefined') {
  addLocaleData(enLocaleData);
  addLocaleData(plLocaleData);

  if (!window.Intl) {
    (new Promise((resolve) => {
      resolve(require('intl'));
    }))
      .then(() => Promise.all([
        require('intl/locale-data/jsonp/en.js'),
        require('intl/locale-data/jsonp/pl.js'),
      ]))
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = {
  LOCALES,
  DEFAULT_LOCALE,
  appLocales,
  translationMessages,
};
