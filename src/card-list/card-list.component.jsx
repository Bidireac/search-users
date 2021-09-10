import React from 'react';
import Card from '../card/card.component';
import SearchBox from '../search-box/search-box.component';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import './card-list.styles.scss';

const CardList = ({ users, handleChange, currentUser }) => (
  <div className="CardList row">
    <div className="CardList-navigation">
      {currentUser ? (
        <div onClick={() => auth.signOut()} className="sign-in">
          Sign Out
        </div>
      ) : (
        <NavLink className="sign-in" to="/sign-in">
          Sign In
        </NavLink>
      )}
    </div>
    <div className="CardList-header">
      <h1 className="CardList-title">Users List</h1>
      <SearchBox handleChange={handleChange} />
    </div>
    <div className="CardList-users">
      {users.map((user) => (
        <Card key={user.login.uuid} user={user} currentUser={currentUser} />
      ))}
    </div>
  </div>
);

export default CardList;
