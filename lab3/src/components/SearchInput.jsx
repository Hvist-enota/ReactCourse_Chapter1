import React from 'react';

function SearchInput({ searchQuery, onSearchChange }) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={onSearchChange}
      placeholder="Пошук завдань"
    />
  );
}

export default SearchInput;
