import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './loginButton.css';

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
    <button id='logButt' onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;