import React, { useState, useEffect } from "react"
import axios from "axios";




const UpdateModal = (props) =>{

    // const [show, setShow] = useState(false)
    // const closeModal = () => setShow(false);
    // const openModal = () => setShow(true);

    useEffect(() => {
      setValues();
    }, );
    
    async function putUpdateSong(updateSong) {
      const response = await axios.put(`http://127.0.0.1:8000/api/music/${props.entry.id}/`,updateSong);
      console.log(response.data);
      props.getAllSongs();
    };
    
      const [currentTitle, setTitle] = useState('');
      const [currentArtist, setArtist] = useState('');
      const [currentAlbum, setAlbum] = useState('');
      const [currentGenre, setGenre] = useState('');
      const [currentRelease_date, setRelease_Date] = useState('');

      function setValues(){
        console.log(props.entry)
        setTitle(props.entry.title)
        setArtist(props.entry.artist)
        setAlbum(props.entry.album)
        setGenre(props.entry.genre)
        setRelease_Date(props.entry.release_date)
      }
    
    
      function handleSubmit(event) {
        event.preventDefault();
        let updateSong = {
          title: currentTitle,
          artist: currentArtist,
          album: currentAlbum,
          genre: currentGenre,
          release_date: currentRelease_date,
        };
        console.log(updateSong);
        putUpdateSong(updateSong);
      };





    return (
      <div>
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
  Update
</button>

<div class="modal" id="updateModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

     
      <div class="modal-header">
        <h4 class="modal-title">Update Song</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

    
      <div class="modal-body">
                  <div className="create-section">
               <div className="createContainer">
        
                <form className='createForm' onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <div>
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          
                          value={currentTitle}
                          onChange={(event) => setTitle(event.target.value)}
                          />
                      </div>
                  </div>

                  <div className="col">
                    <label>Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentArtist}
                      onChange={(event) => setArtist(event.target.value)}
                      />
                  </div>

                  <div className="col">
                    <label>Album</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentAlbum}
                      onChange={(event) => setAlbum(event.target.value)}
                      />
                  </div>

                  <div className="col">
                    <label>Genre
                    <input
                      type="text"
                      className="form-control"
                      value={currentGenre}
                      onChange={(event) => setGenre(event.target.value)}
                      />
                    </label>
                  </div>

                  <div className="col">
                    <label>Release Date</label>
                    <input
                      type="date"
                      className="form-control"
                      defaultValue={props.entry.release_date}
                      // value={currentRelease_date}
                      onChange={(event) => setRelease_Date(event.target.value)}
                    />
                  </div>
                  </div> 
                      <div class="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type='submit' className='btn btn-primary'onSubmit={handleSubmit}>Update</button>
      </div>              
              </form>
              </div>
          </div>
              </div>
     
     
                      </div>
                    </div>
                  </div>
             
      </div>
    );
};

 export default UpdateModal;