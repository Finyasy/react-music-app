import React from "react";
import {FaTimes} from 'react-icons/fa';

const MusicList = ({music}) => {
  return (
    <div className="List">
      <h1>{music.songName} <FaTimes style={{color:'red', cursor:'pointer'}}  />
       </h1>
      <h2>{music.artist}</h2>
      <p>{music.lyrics}</p>
      <p>{music.Ratings}</p>
      <img src={music.image} alt="" />
    </div>
  );
};

export default MusicList;
