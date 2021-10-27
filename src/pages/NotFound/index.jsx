import Navigation from 'components/Navigation';
import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      <Navigation />
      <h1>ERREUR 404: PAGE NOT FOUND</h1>
    </div>
  );
};

export default NotFound;