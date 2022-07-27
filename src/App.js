import React, { useState } from "react";
import Header from "./Components/Header";
import MusicItem from "./Components/MusicItem";
import MusicForm from "./Components/MusicForm";

function App() {
  const [musics, setMusic] = useState([
    {
      id: 1,
      songName: "Waiting For You",
      artist: "Future ft. Drake, Tems",
      lyrics:
        "You pray for my demons, girl, I got you,Every time I sip on codeine.....",
      Ratings: "9 / 10",
      image: "/pictures/future.jpeg",
    },
    {
      id: 2,
      songName: "London",
      artist: "Jcole",
      lyrics: "I'm in London, I like to go to shop in the mall (Yeah)",
      Ratings:" 7 / 10",
      image: "/pictures/jcole.png",
    },
  ]);

  const addMusic = (music) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setMusic([...musics, { ...music, id }]);
  }

  const deleteMusic = (id) => {
    setMusic(musics.filter((music) => music.id !== id));
  };

  return (
    <div className="App">
      <MusicForm onAdd={addMusic} />
      <div>
        <Header title="Music Tracker" />
        {musics.length > 0 ? (
          <MusicItem musics={musics} onDelete={deleteMusic} />
        ) : (
          <h1>No Music</h1>
        )}
      </div>
    </div>
  );
}

export default App;
