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
  
  async function deleteSong(key) {
    const response = await axios.delete(`http://127.0.0.1:8000/api/music/${key}`);
    console.log(response.data);
    getAllSongs();
  }
  
  
  return (
    <div>
      <div>
        <SearchBar />
      </div>
          <div className='border-box'>
            <MusicTable songs={songs} deleteSong={deleteSong}/>
          </div>

        <div>
          <CreateSong />
        <button onClick={() => getAllSongs()}>Get All Songs</button>
        </div>

  
      
      
     
    </div>
 
  )
}

export default App;
