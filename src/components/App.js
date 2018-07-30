import React, { Component, Fragment } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import UserList from './UserList';
import CreateForm from './CreateForm';
import CreateSuccess from './CreateSuccess';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#3CAFCA'}} />
          <Route exact path='/' component={UserList} />
          <Route exact path='/create' component={CreateForm} />
          <Route exact path='/create-success' component={CreateSuccess} />
        </Fragment>
      </ConnectedRouter>
    );
  }
}

export default connect()(App);
