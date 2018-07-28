import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={UserList} />
      </Router>
    );
  }
}

export default App;
