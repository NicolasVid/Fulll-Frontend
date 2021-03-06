import React from "react";
import PropType from "prop-types";

import "./searchBar.css";

const SearchBar = ({ onSubmit, search, setSearch }) => {
  return (
    <div className="searchbar">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropType.func.isRequired,
  search: PropType.string.isRequired,
  setSearch: PropType.func.isRequired,
};

export default SearchBar;
