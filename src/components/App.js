import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './UserList';
import CreateForm from './CreateForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path='/' component={UserList} />
          <Route exact path='/create' component={CreateForm} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
