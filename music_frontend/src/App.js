import React, {useState, useEffect} from 'react'
import axios from 'axios';
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

  async function addNewSong() {
    const response = await axios.post('http://127.0.0.1:8000/api/music/');
    console.log(response.data)
    setSongs(response.data)
  }
  
 


  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className="main-page_body">
        
          <MusicTable parentSongs={songs} />
          </div>

      <button onClick={() => getAllSongs()}>Get All Songs</button>

          <CreateSong /><button onClick={() => addNewSong()}>Add</button>
      </div>
      
  )
}

export default App;
