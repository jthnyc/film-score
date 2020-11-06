import "./App.css";
import React from "react";
import MovieContextProvider from "./contexts/MovieContext";
import SearchBarMovie from "./components/SearchBarMovie";
import ListMovie from "./components/ListMovie";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <SearchBarMovie />
        <ListMovie />
      </MovieContextProvider>
    </div>
  );
}

export default App;
