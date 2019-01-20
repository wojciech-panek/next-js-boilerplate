import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import withIntl from '../../../shared/lib/withIntl';
import { LanguageSwitcher } from './languageSwitcher.component';
import { selectLocalesLanguage } from '../../../modules/locales/locales.selectors';


const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default compose(
  withIntl,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(LanguageSwitcher);
