import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import CreateSong from "./Components/CreateSong/CreateSong";
import Modal from "./Components/Modal/Modal";

function App() {
  const [songs, setSongs] = useState([]);

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
      <MusicTable songs={songs} deleteSong={deleteSong} likeSong={likeSong} />
      <CreateSong />
      
      <br></br>           
      
    
        <div className="container mt-3">
        <h3>Modal Example</h3>
        <p>Click on the button to open the modal.</p>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Open modal
        </button>
      </div>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Update Song</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
           </div>
          </div>
          </div>
          </div>
    </div>
  );
};

export default App;
