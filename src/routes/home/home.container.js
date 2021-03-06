import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import withIntl from '../../shared/lib/withIntl';
import { Home } from './home.component';
import { selectSeriesItems } from '../../modules/series';


const mapStateToProps = createStructuredSelector({
  series: selectSeriesItems,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default compose(
  withIntl,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
