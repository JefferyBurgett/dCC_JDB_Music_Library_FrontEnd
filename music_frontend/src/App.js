import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import CreateSong from './Components/CreateSong/CreateSong';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();  
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }

  
  // async function deleteSong() {
  //   const response = await axios.delete('http://127.0.0.1:8000/api/music/', id);
  //   console.log(response.data)
  //   setSongs(response.data)
  // }


  return (
    <div>
      <div>
        <SearchBar />
      </div>
        <div className="main-page_body">
          <div className='border-box'>
            <MusicTable parentSongs={songs} />
          </div>
        </div>
        <div>
          <CreateSong />
      </div>
            <button onClick={() => getAllSongs()}>Get All Songs</button>
    </div>
  )
}

export default App;
