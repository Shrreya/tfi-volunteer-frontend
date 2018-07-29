import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import UserList from './UserList';
import CreateForm from './CreateForm';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#3CAFCA'}} />
          <Route exact path='/' component={UserList} />
          <Route exact path='/create' component={CreateForm} />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
