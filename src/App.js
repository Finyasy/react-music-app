import React, { useState,useEffect } from "react";
import Header from "./Components/Header";
import MusicItem from "./Components/MusicItem";
import MusicForm from "./Components/MusicForm";

function App() {
  const [showAddMusic, setShowAddMusic] = useState(false);
  const [musics, setMusic] = useState([]);

  useEffect(() => {
    const getMusic = async () => {
      const musicsFromServer = await fetchMusics();
      setMusic(musicsFromServer);
    }

    getMusic();
  }, []);

  // Fetch music
  const fetchMusics = async () => {
    const res = await fetch("http://localhost:5000/musics");
    const data = await res.json();

    return data
  }

  const addMusic = (music) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setMusic([...musics, { ...music, id }]);
  };

  const deleteMusic = async(id) => {
    await fetch(`http://localhost:5000/musics/${id}`, {
      method: "DELETE"
    });

    setMusic(musics.filter((music) => music.id !== id));
  };

  return (
    <div className="App">
      <Header
        title="Music Tracker"
        onAdd={() => setShowAddMusic(!showAddMusic)}
        showAdd={showAddMusic}
      />
      {showAddMusic && <MusicForm onAdd={addMusic} />}
      {musics.length > 0 ? (
        <MusicItem musics={musics} onDelete={deleteMusic} />
      ) : (
        <h1>No Music</h1>
      )}
    </div>
  );
}

export default App;
