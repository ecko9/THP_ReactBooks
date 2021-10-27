import React from 'react';

const SearchBar = ({ onSubmit, fav, read }) => {

  return (
    <form className="SearchBar" onSubmit={onSubmit}>
      <input type="search" id="search" />
      <input type="submit" value="Submit" />
      <p>Favoris</p>
      <input type="checkbox" id="favorites" onChange={fav} value={false} />
      <p>Read</p>
      <input type="checkbox" id="readed" onChange={read} value={false} />
    </form>
  );
};

export default SearchBar;