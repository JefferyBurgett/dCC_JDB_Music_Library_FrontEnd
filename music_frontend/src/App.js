import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import CreateSong from "./Components/CreateSong/CreateSong";
import UpdateModal from "./Components/Modal/Modal";


function App(props) {
  const [songs, setSongs] = useState([]);
  const [show, setShow] = useState(false)
    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);

  useEffect(() => {
    getAllSongs();
  }, []);




  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log(response.data);
    setSongs(response.data);
  }

function filterSongs(category, filterData) {
    let response = songs.filter((song) =>{
      if (song[category].includes(filterData)) {
        return true;
      }
    });
    setSongs(response)
  }

  async function deleteSong(key) {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/music/${key}/`
    );
    console.log(response.data);
    getAllSongs();
  }
  async function likeSong(key) {
    await axios.patch(`http://127.0.0.1:8000/api/music/${key}/like/`);
    getAllSongs();
  }

  

  return (
    <div>
      <SearchBar filterSongs={filterSongs} songs={songs} />
      <MusicTable songs={songs} show={UpdateModal} deleteSong={deleteSong} likeSong={likeSong} getAllSongs={getAllSongs}/>
      <CreateSong />
      
      <br></br>           
      
    
        
    </div>
  );
};

export default App;
