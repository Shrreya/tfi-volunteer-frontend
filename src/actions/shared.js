import { getInitialData, saveOpp } from '../utils/api';
import { receiveCities } from '../actions/cities';
import { receiveOpps, addOpp } from '../actions/opps';
import { showLoading, hideLoading } from 'react-redux-loading';
import { push } from 'connected-react-router';

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

export function handleSaveOpp (opp) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveOpp(opp)
      .then(
        (opp) => {
          dispatch(addOpp(opp));
          dispatch(push('/create-success'));
          dispatch(hideLoading());
        },
        (error) => {
          // TODO: error handling
        }
      );
  }
}
