import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RedirectIfLoggedIn = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('baiziUserToken');
  return (
    <Route
      {...rest}
      render={() => token ? <Redirect to='/write' /> : <Component />}
    >
    </Route>
  )
};

export default RedirectIfLoggedIn;