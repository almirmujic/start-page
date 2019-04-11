import React from 'react';
import './Search.css';

function Search() {
  return (
    <form
      className="SearchForm"
      action="https://google.com/search"
      method="get"
      autoComplete="off"
    >
      <input type="text" name="q" id="" placeholder="Search Google" />
    </form>
  );
}

export default Search;
