import { combineReducers } from 'redux';
import cities from './cities';
import opps from './opps';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  cities,
  opps,
  loadingBar: loadingBarReducer
});
