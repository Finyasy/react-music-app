import React, { useState } from "react";

const MusicForm = ({ onAdd }) => {
  const [newMusic, setNewMusic] = useState({
    songName: "",
    artist: "",
    lyrics: "",
    Ratings: "",
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewMusic({ ...newMusic, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(newMusic);
    setNewMusic({
      songName: "",
      artist: "",
      lyrics: "",
      Ratings: "",
      image: "",
    });
  }

  return (
    <form className="new-music-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="songName"
        value={newMusic.songName}
        placeholder="Music Name"
      />
      <input
        onChange={handleChange}
        name="artist"
        value={newMusic.artist}
        placeholder="Artist"
      />
      <input
        onChange={handleChange}
        name="Ratings"
        value={newMusic.Ratings}
        placeholder="Ratings"
      />
      <input
        onChange={handleChange}
        name="images"
        value={newMusic.image}
        placeholder="Image"
      />
      <textarea
        onChange={handleChange}
        name="lyrics"
        value={newMusic.lyrics}
        placeholder="Write your lyrics here..."
        rows={10}
      />
      <input type="submit" value="Share your lyrics" />
    </form>
  );
};

export default MusicForm;
