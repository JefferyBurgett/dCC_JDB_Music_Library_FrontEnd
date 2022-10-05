const MusicTable = (props) => {
    return (
        <div className='container'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Likes</th>
                </tr>
            </thead>
            <tbody>
            {props.parentSongs.map((song, index) => {
            return (
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td>{song.likes}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
     );
}
 
export default MusicTable;
        