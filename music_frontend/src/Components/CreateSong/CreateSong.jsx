import React, { useState} from 'react';
import './CreateSong.css'
import axios from 'axios';


const CreateSong = (props) => {

    async function postNewSong(newSong) {      
        const response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);     
        console.log(response.data)
        props.getallSongs();
    };

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setRelease_Date] = useState('');
    // const [likes, setLikes] = useState(0);

    



    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,
            // likes: likes
        };
        console.log(newSong);
        postNewSong(newSong);

    }

        return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='form-grid'>
                <div className='form-group'>
                    <label>Title</label>
                         <input type='text'className="form-control" value={title} onChange={(event) => setTitle((event.target.value))} />
                </div>
                <div>
                    <label>Artist</label>
                        <input type='text'className="form-control" value={artist} onChange={(event) => setArtist((event.target.value))} />
                </div>
                <div>
                    <label>Album</label>
                        <input type='text'className="form-control" value={album} onChange={(event) => setAlbum((event.target.value))} />
                </div>
                <div>
                    <label>Genre</label>
                        <input type='text'className="form-control" value={genre} onChange={(event) => setGenre((event.target.value))} />
                </div>
                <div>
                    <label>Release Date</label>
                        <input type='date'className="form-control" value={release_date} onChange={(event) => setRelease_Date((event.target.value))} />
                </div>
                <button onClick={() => postNewSong()}>Add</button>
            </form>
        </div>

        )
}

export default CreateSong;