import React from "react";
import MusicList from "./MusicList";

function MusicItem ({musics}){

  return (
    <>
      {musics.map((music) => (
        <MusicList  key={music.id} music={music}/>
      ))}
    </>
  );
};

export default MusicItem;
