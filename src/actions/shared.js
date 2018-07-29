import { getInitialData } from '../utils/api';
import { receiveCities } from '../actions/cities';
import { receiveOpps } from '../actions/opps';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(
        ({ cities, opps }) => {
          dispatch(receiveCities(cities));
          dispatch(receiveOpps(opps));
          dispatch(hideLoading());
        },
        (error) => {
          // TODO: error handling
        }
      );
  }
}
