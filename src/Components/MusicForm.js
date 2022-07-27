import React,{useState} from "react";

const MusicForm = ({onAdd}) => {
  const [newMusic, setNewMusic] = useState({
    songName: "",
    artist: "",
    lyrics: "",
    Ratings: "",   
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewMusic({ ...newMusic, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(newMusic);
    setNewMusic(
      {
        songName: "",
        artist: "",
        lyrics: "",
        Ratings: "",
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        onChange={handleChange}
        name="songName"
        value={newMusic.songName}
        placeholder="songName"
      />
      <input
        onChange={handleChange}
        name="artist"
        value={newMusic.artist}
        placeholder="artist"
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
        placeholder="images"
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
