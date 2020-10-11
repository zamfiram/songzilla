import React from "react";
import './Playlist.css';

const Playlist = () => {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      <button className="Playlist-save">Save this song to your Spotify playlist</button>
    </div>
  );
};

export default Playlist;
