const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault()
        // props.filterSongs(category, filterData)
    }



    return (


    <div class="container mt-3">
  <h2>Music Library</h2>
    <form action="/action_page.php">
    <label for="sel1" class="form-label">Select list (select one):</label>
    <select class="form-select form-select-sm" id="sel1" name="sellist1">
      <option>All</option>
      <option>Title</option>
      <option>Artist</option>
      <option>Album</option>
      <option>Genre</option>
      <option>Release Date</option>
      <option>Likes</option>
    </select>
      <button onClick={(handleSubmit)}>Filter</button>
    <br></br>
    </form >
    </div>
)
    }

export default SearchBar;