import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MusicItem from "./Components/MusicItem";
import MusicForm from "./Components/MusicForm";
import Footer from "./Components/Footer";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";

function App() {
  const [showAddMusic, setShowAddMusic] = useState(false);
  const [musics, setMusic] = useState([]);

  useEffect(() => {
    const getMusic = async () => {
      const musicsFromServer = await fetchMusics();
      setMusic(musicsFromServer);
    };

    getMusic();
  }, []);

  // Fetch music
  const fetchMusics = async () => {
    const res = await fetch("http://localhost:5000/musics");
    const data = await res.json();

    return data;
  };

  const addMusic = async (newMusic) => {
    const res = await fetch("http://localhost:5000/musics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMusic),
    });

    const data = await res.json();
    setMusic([...musics, data]);

    //   const id = Math.floor(Math.random() * 10000) + 1;
    //   setMusic([...musics, { ...music, id }]);
    //
  };

  const deleteMusic = async (id) => {
    await fetch(`http://localhost:5000/musics/${id}`, {
      method: "DELETE",
    });

    setMusic(musics.filter((music) => music.id !== id));
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Header
          title="Music Lyrics Tracker"
          onAdd={() => setShowAddMusic(!showAddMusic)}
          showAdd={showAddMusic}
        />
        {showAddMusic && <MusicForm onAdd={addMusic} />}
        {musics.length > 0 ? (
          <MusicItem musics={musics} onDelete={deleteMusic} />
        ) : (
          <h1>No Music</h1>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route path="*" element={<ErrorPage/>} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
