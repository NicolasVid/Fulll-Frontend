import React from "react";
import PropType from "prop-types";

import "./searchBar.css";

const SearchBar = ({ setSearch, search }) => {
  return (
    <div className="searchbar">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="Type in to search a github user..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  setSearch: PropType.func.isRequired,
  search: PropType.string.isRequired,
};

export default SearchBar;
