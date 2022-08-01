import React from "react";
import { FaTimes } from "react-icons/fa";

const MusicList = ({ music, onDelete }) => {
  return (
    <div className="List">
      <h1>
        {music.songName} by {music.artist}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(music.id)}
        />
      </h1>
      <p>{music.lyrics}</p>
      <h1>{music.Ratings}</h1>
      <img
        className="photo"
        src={music.image}
        height={300}
        width={300}
        alt=""
      />
    </div>
  );
};

export default MusicList;
