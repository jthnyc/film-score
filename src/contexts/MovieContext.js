import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const MovieContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const MovieContextProvider = (props) => {
  const [url, setUrl] = useState(API_URL);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios(url);
      console.log("RESPONES: ", response);
      const result = response.data["results"] || [];
      console.log("RESULT === ", result);
      setSearchResult(result);
    };
    fetchData();
  }, [url]);

  return (
    <MovieContext.Provider
      value={{
        setUrl,
        query,
        setQuery,
        searchResult,
        API_URL,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
