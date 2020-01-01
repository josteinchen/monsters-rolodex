import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ onSearchChange, searchField, placeholder }) => (
  <input
    className='search-box'
    type='search'
    placeholder={placeholder}
    value={searchField}
    onChange={onSearchChange}
  />
);
