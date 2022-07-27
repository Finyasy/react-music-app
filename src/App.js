import React, { useEffect,useState } from "react";
import Header from "./Components/Header";
import MusicItem from "./Components/MusicItem";


function App() {
  const [musics, setMusic] = useState([
    {
      id: 1,
      songName: "Waiting For You",
      artist: "Future ft. Drake, Tems",
      lyrics:"You pray for my demons, girl, I got you,Every time I sip on codeine.....",
      Ratings: 9 / 10,
      image:"/pictures/future.jpg"
    },
    {
      id: 2,
      songName: "London",
      artist: "Jcole",
      lyrics: "I'm in London, I like to go to shop in the mall (Yeah)",
      Ratings: 7 / 10,
      image: "/pictures/jcole.png",
    },
  ]);

  return (
    <div className="App">
      <Header title="Music Tracker"/>
      <MusicItem musics={musics}/>
    </div>
  );
}

export default App;