import React from "react";

function MusicItem ({musics}){

  return (
    <>
      {musics.map((music) => (
        <div key={music.id}>
          <h1>{music.songName}</h1>
          <h2>{music.artist}</h2>
          <p>{music.lyrics}</p>
          <p>{music.Ratings}</p>
          <img src={music.image} alt="" />
        </div>
      ))}
    </>
  );
};

export default MusicItem;
