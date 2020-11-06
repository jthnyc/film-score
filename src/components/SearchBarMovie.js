import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const SearchBarMovie = () => {
  const { query, setQuery, setUrl, API_URL } = useContext(MovieContext);

  return (
    <div className="searchbar">
      <form
        onSubmit={(e) => {
          setUrl(API_URL + `&query=${query}`);
          e.preventDefault();
        }}
      >
        <button>
          <input
            type="search"
            value={query}
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBarMovie;
