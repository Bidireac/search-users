import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import CustomLink from '../custom-link/custom-link.component';
import { auth } from '../firebase/firebase.utils';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({ currentUser }) => (
  <div className="SignInAndSignUpPage">
    <div className="SignInAndSignUpPage-nav">
      {currentUser ? (
        <CustomLink onClick={() => auth.signOut()}>Sign Out</CustomLink>
      ) : (
        ''
      )}
      <CustomLink>Go Back</CustomLink>
    </div>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
