import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import withIntl from '../../shared/lib/withIntl';
import { selectSeriesData } from '../../modules/series';
import { Series } from './series.component';


const mapStateToProps = createStructuredSelector({
  data: selectSeriesData,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default compose(
  withIntl,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Series);
