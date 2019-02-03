import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const TokenRequiredRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('baiziUserToken');
  return (
    <Route
      {...rest}
      render={() => token ? <Component /> :<Redirect to='/' />}
    >
    </Route>
  )
};

export default TokenRequiredRoute;