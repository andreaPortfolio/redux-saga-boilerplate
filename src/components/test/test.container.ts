import { connect } from 'react-redux';
import { TestComponent } from './test.component';

import { actionGetChronology, State } from '@monotest/redux';

const mapStateToProps = (state: State) => ({
  chronology: state.chronology
});

const mapDispatchToProps = dispatch => ({
  actionGetChronology: (params) => dispatch(actionGetChronology(params))
});

export const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);
