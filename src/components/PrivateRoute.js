import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, authenticated, redirectTo }) => {
  if (!authenticated) {
    return <Navigate to={redirectTo} />;
  }

  return element;
};

export default PrivateRoute;
