import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({ handleChange }) => (
  <input
    className="search"
    type="search"
    name="searchField"
    placeholder="Search User"
    onChange={handleChange}
  />
);

export default SearchBox;
