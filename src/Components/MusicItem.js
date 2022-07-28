import React from "react";
import MusicList from "./MusicList";

function MusicItem({ musics, onDelete }) {
  return (
    <div className="music-container">
      {musics.map((music) => (
        <MusicList key={music.id} music={music} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default MusicItem;
