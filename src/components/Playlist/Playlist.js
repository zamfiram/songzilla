import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList />
        <button className="Playlist-save">
          Save this song to your Spotify playlist
        </button>
      </div>
    );
  }
}

export default Playlist;
