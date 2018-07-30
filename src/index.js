import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './utils/history';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(connectRouter(history)(reducer), middleware);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root')
);

registerServiceWorker();
