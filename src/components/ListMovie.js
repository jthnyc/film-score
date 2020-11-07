import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import DetailMovie from "./DetailMovie";

const img_URL = `https://image.tmdb.org/t/p/w200`;

const ListMovie = () => {
  const { query, searchResult } = useContext(MovieContext);
  console.log("SEARCH RESULT: ", searchResult);
  return (
    <div>
      {query ? (
        <div>
          <h5>Results for "{query}"</h5>
          <div className="result-container">
            {searchResult.map((result) => (
              <DetailMovie
                key={result.id}
                title={result.original_title}
                year={result.release_date.substring(0, 4)}
                img={img_URL + result.poster_path}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h5>Search Result</h5>
        </div>
      )}
    </div>
  );
};

export default ListMovie;
