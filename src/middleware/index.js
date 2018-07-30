import thunk from 'redux-thunk';
import logger from './logger';
import history from '../utils/history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose } from 'redux';

export default compose(applyMiddleware(routerMiddleware(history),thunk, logger));
