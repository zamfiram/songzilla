import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 },
        { name: "name4", artist: "artist4", album: "album4", id: 4 },
      ],
      playlistName: "Favourite playlist",
      playlistTracks: [
        {
          name: "playlistName1",
          artist: "playlistArtist1",
          album: "playlistAlbum1",
          id: 4,
        },
        {
          name: "playlistName2",
          artist: "playlistArtist2",
          album: "playlistAlbum2",
          id: 5,
        },
        {
          name: "playlistName3",
          artist: "playlistArtist3",
          album: "playlistAlbum3",
          id: 6,
        },
        {
          name: "playlistName4",
          artist: "playlistArtist4",
          album: "playlistAlbum4",
          id: 7,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }


addTrack(track){
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
    return; 
  }
  this.state.playlistTracks.push(track);
  this.setState({playlistTracks: this.state.playlistTracks})
}

removeTrack(track){
  this.state.playlistTracks = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id)
  this.setState({playlistTracks: this.state.playlistTracks})
}

  render() {
    return (
      <div>
        <h1>
          Song<span className="highlight">zilla</span>
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist"></div>
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    );
  }
}

export default App;
