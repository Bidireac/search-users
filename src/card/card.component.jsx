import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.styles.scss';

const Card = ({ user: { login, name, picture }, currentUser }) => (
  <div className="Card-details col-sm-6">
    <div className="card">
      <div className="card-body">
        <img src={picture.medium} alt={name.first} />
        <h5 className="card-title">
          {name.first} {name.last}
        </h5>
        {currentUser ? (
          <NavLink to={`/${login.uuid}`}>View Profile</NavLink>
        ) : (
          <NavLink to="/sign-in">Login To View Profile</NavLink>
        )}
      </div>
    </div>
  </div>
);

export default Card;
