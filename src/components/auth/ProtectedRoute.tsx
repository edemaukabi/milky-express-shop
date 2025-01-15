import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const isLoggedIn = localStorage.getItem('is_authenticated') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
