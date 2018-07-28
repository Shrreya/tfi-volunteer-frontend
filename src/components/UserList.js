import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pencil from '../assets/pencil.svg';
import search from '../assets/search.svg';

class UserList extends Component {

  render() {

    return (
      <div className='user-list'>
        <Link className='user-option' to='/create'>
          <img className='user-icon' alt='create opprtunity' src={pencil}/>
          <p>Create opportunity</p>
        </Link>
        <Link className='user-option' to='/search'>
          <img className='user-icon' alt='search opprtunity' src={search}/>
          <p>Search opportunity</p>
        </Link>
      </div>
    );
  }
}

export default UserList;
