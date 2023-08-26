// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// const PrivateRoute = () => {
//     const auth = null;
//     return auth ? <Outlet /> : <Navigate to="/account/login" />;
// }

// export default PrivateRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check the user's authentication status here
  const authToken = sessionStorage.getItem('authToken'); // Retrieve the auth token from session storage
  console.log('Authentication token:', authToken);
  // If authToken exists and is valid, set auth to true, otherwise set it to false
//   const auth = authToken ? true : false;
const auth = authToken !== null;

  return auth ? <Outlet /> : <Navigate to="/account/login" />;
}

export default PrivateRoute;
