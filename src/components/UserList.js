import React, { Component } from 'react';
import pencil from '../assets/pencil.svg';
import search from '../assets/search.svg';

class UserList extends Component {

  render() {

    return (
      <div className='user-list'>
        <div className='user-option'>
          <img className='user-icon' alt='create opprtunity' src={pencil}/>
          <p>Create opportunity</p>
        </div>
        <div className='user-option'>
          <img className='user-icon' alt='search opprtunity' src={search}/>
          <p>Search opportunity</p>
        </div>
      </div>
    );
  }
}

export default UserList;
