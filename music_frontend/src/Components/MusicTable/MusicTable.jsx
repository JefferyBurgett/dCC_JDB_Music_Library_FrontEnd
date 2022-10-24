import React from 'react'
import UpdateModal from '../Modal/Modal';



import "./MusicTable.css";


const MusicTable = (props) => {

  
 
  


  return (
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
            {props.songs.map((entry) => {
              
            return (
              <tr key={entry.id}>              
                <td>{entry.title}</td>
                <td>{entry.artist}</td>
                <td>{entry.album}</td>
                <td>{entry.genre}</td>
                <td>{entry.release_date}</td>
                <td>{entry.likes}</td>
                {/* <td><button onClick={() => props.openModal(entry.id)} >Update</button></td> */}
                <UpdateModal entry={entry} getAllSongs={props.getAllSongs}/>
                <td><button onClick={() => props.deleteSong(entry.id)}>Delete</button></td>
                <td><button onClick={() => props.likeSong(entry.id)}>Like</button></td>
              </tr>
            ) 
             })}            
                        
        </tbody>
      </table>
      </div>
     );
}

export default MusicTable;
