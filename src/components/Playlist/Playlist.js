import React from "react";
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

const Playlist = () => {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      <TrackList/>
      <button className="Playlist-save">Save this song to your Spotify playlist</button>
    </div>
  );
};

export default Playlist;
