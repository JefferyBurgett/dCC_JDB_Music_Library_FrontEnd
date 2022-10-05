const CreateSong = () => {
        return (
    <div className="container">
        <div className="input-group mb-3">
        <span className="input-group-text">Song</span>
            <input type="text" className="form-control" placeholder="Title"></input>
            <input type="text" className="form-control" placeholder="Artist"></input>
            <input type="text" className="form-control" placeholder="Album"></input>
            <input type="text" className="form-control" placeholder="Genre"></input>
            <input type="text" className="form-control" placeholder="Release Date"></input>
            <input type="text" className="form-control" placeholder="Likes"></input>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </div>




        )
    }
export default CreateSong;