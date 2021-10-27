import React from 'react';
import Navigation from 'components/Navigation';
import BookList from 'components/BookList';


const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <h1>Accueil</h1>
      <BookList />
    </div>
  );
};

export default Home;