import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import withIntl from '../../shared/lib/withIntl';
import { selectEpisodesData } from '../../modules/episodes';
import { Episodes } from './episodes.component';


const mapStateToProps = createStructuredSelector({
  data: selectEpisodesData,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default compose(
  withIntl,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Episodes);
