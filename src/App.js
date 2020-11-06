import "./App.css";
import React from "react";
import MovieContextProvider from "./contexts/MovieContext";
import SearchBarMovie from "./components/SearchBarMovie";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <SearchBarMovie />
      </MovieContextProvider>
    </div>
  );
}

export default App;
