import React from 'react';
import Link from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="row">
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for was not found</p>
      <Link to="/">Return to the home page</Link>
    </div>
  );
};

export default NotFound;
