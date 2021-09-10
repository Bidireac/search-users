import React, { Component } from 'react';
import CustomLink from '../custom-link/custom-link.component';
import './user-card.styles.scss';

class UserCard extends Component {
  render() {
    const { users, match } = this.props;
    const displayUser = users.filter(
      (user) => user.login.uuid === match.params.user
    )[0];
    const {
      cell,
      dob,
      email,
      gender,
      location,
      name,
      nat,
      picture,
      registered,
    } = displayUser;
    const formatDate = new Date(Date.parse(registered.date)).toDateString();
    const registrationDate = formatDate.split(' ').slice(1).join(' ');
    return (
      <div className="UserCard">
        <div className="card text-center">
          <div className="card-header">
            <img src={picture.large} alt={name.first} />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {name.title}. {name.first} {name.last}
            </h5>
            <p className="card-text">
              Email: <span className="text-muted">{email}</span>
            </p>
            <p className="card-text">
              Phone: <span className="text-muted">{cell}</span>
            </p>
            <p className="card-text">
              Gender: <span className="text-muted">{gender}</span>
            </p>
            <p className="card-text">
              Nationality: <span className="text-muted">{nat}</span>
            </p>
            <p className="card-text">
              Age: <span className="text-muted">{dob.age}</span>
            </p>
            <p className="card-text">
              Country: <span className="text-muted">{location.country}</span>
            </p>
            <p className="card-text">
              City: <span className="text-muted">{location.city}</span>
            </p>
            <p className="card-text">
              Registered: <span className="text-muted">{registrationDate}</span>
            </p>
          </div>
          <div className="card-footer text-muted">
            <CustomLink>Go Back</CustomLink>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
