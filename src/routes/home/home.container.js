import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'ramda';

import { Home } from './home.component';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';
import { selectMaintainersItems } from '../../modules/maintainers/maintainers.selectors';


const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
  maintainers: selectMaintainersItems,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
