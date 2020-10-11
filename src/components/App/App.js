import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  return (
    <div>
      <h1>
        Song<span className="highlight">zilla</span>
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist"></div>
        <SearchResults/>
        <Playlist />
      </div>
    </div>
  );
}

export default App;
