import React from "react";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={onSearchChange}
      style={{ marginBottom: "1rem", padding: "0.5rem", width: "200px" }}
    />
  );
};

export default SearchInput;
