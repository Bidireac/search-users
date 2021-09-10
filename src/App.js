import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import CardList from './card-list/card-list.component';
import UserCard from './user-card/user-card.component';
import SignInAndSignUpPage from './sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], searchField: '', currentUser: null };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getMoreUsers();
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  async getMoreUsers() {
    const response = await axios.get('https://randomuser.me/api/?results=12');
    const result = response.data.results;
    this.setState((prevState) => ({
      users: [...prevState.users, ...result],
    }));
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <CardList
                users={filteredUsers}
                handleChange={this.handleChange}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/sign-in"
            render={() => (
              <SignInAndSignUpPage currentUser={this.state.currentUser} />
            )}
          />
          <Route
            path="/:user"
            render={(otherProps) => (
              <UserCard users={this.state.users} {...otherProps} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
