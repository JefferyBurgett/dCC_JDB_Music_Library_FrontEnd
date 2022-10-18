import React, { useState} from "react"
import axios from "axios";




const Modal = (props, songs) =>{

    async function putUpdateSong(updateSong) {
        const response = await axios.put("http://127.0.0.1:8000/api/music/",updateSong);
        console.log(response.data);
        props.getAllSongs();
        };
    
      const [title, setTitle] = useState("");
      const [artist, setArtist] = useState("");
      const [album, setAlbum] = useState("");
      const [genre, setGenre] = useState("");
      const [release_date, setRelease_Date] = useState("");
    
    
      function handleSubmit(event) {
        event.preventDefault();
        let updateSong = {
          title: title,
          artist: artist,
          album: album,
          genre: genre,
          release_date: release_date,
        };
        console.log(updateSong);
        putUpdateSong(updateSong);
      };





    return (
        <div>
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
            <div className='table-container'>
        <table className='table table-bordered table-stripped'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Likes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {props.songs.map((entry, index) => {
              let key = entry.id
            return (
              <tr key={index}>              
                <td>{entry.title}</td>
                <td>{entry.artist}</td>
                <td>{entry.album}</td>
                <td>{entry.genre}</td>
                <td>{entry.release_date}</td>
                <td>{entry.likes}</td>
                </tr>
            ) 
             })}            
                        
        </tbody>
      </table>
      </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
     </div>
     </div>
    
    );
};
{/* <div className="create-section">
        <div className="createContainer">
        <h5>Add Song</h5>
      <form className='createForm' onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div>
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
         </div>

            <div className="col">
              <label>Artist</label>
              <input
                type="text"
                className="form-control"
                value={artist}
                onChange={(event) => setArtist(event.target.value)}
              />
            </div>

            <div className="col">
              <label>Album</label>
              <input
                type="text"
                className="form-control"
                value={album}
                onChange={(event) => setAlbum(event.target.value)}
              />
            </div>

            <div className="col">
              <label>Genre
              <input
                type="text"
                className="form-control"
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
              />
              </label>
            </div>

            <div className="col">
              <label>Release Date</label>
              <input
                type="date"
                className="form-control"
                value={release_date}
                onChange={(event) => setRelease_Date(event.target.value)}
              />
            </div>
             <div className='col'>
                <button onClick={() => postNewSong()}>Add</button>
             </div>   
          </div>
      </form>
    </div> */}










 export default Modal;