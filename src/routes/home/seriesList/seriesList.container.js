import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import withIntl from '../../../shared/lib/withIntl';
import { selectSeriesItems } from '../../../modules/series';
import { SeriesList } from './seriesList.component';


const mapStateToProps = createStructuredSelector({
  items: selectSeriesItems,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default compose(
  withIntl,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(SeriesList);
