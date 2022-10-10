import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [category, setCategory] = useState("All");
  const [filterData, setFilterData] = useState();

  function handleSubmit(event) {
    event.preventDefault()
    props.filterSongs(category, filterData)
    console.log(category)
}

  // TOTAL STEPS
  // DONE 1) select filter category - artist, album, etc
  // 2) retrieve the values for that category - Billy Joel, Metallica, Justin Beiber
  // 3) Populate a second dropdown with those values
  // 4) Select from that second filter
  // 5) Return only the songs that meet that filter
  // const categories = songs.filter(filterData)
  // function updatedCategoryList(category) {

  function chooseCategory(event) {
    event.preventDefault();
    const selectedCategory = document.querySelector('#category-list').value    
    setCategory(selectedCategory)
    // return selectedCategory > document.getElementById("choosenCategory").value;
  }

    // 
  
    // research "lifting state up" so the musicTable reflects the new songs list
    // props.filterSongs(selectedCategory, filterData);
  

  return (
    <div className="search-bar">
      <div className="search-container">
        <h2>Music Library</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
            <select className="form-select" id = 'category-list' onChange={(e) => chooseCategory(e)}>
            <option>All</option>
            <option value='title'>Title</option>
            <option value='artist'>Artist</option>
            <option value='album'>Album</option>
            <option value='genre'>Genre</option>
            <option value='release_date'>Release Date</option>
            <option value='likes'>Like</option>
            
          </select>
          </div>
          <div className="col">
          <select className="form-select" id = 'category-list'   onChange={(e) => setFilterData(e.target.value)} >
            {props.songs.map((song, index) => {
              return (
                <option key={index} value={song[category]}>{song[category]}</option>
              )
            })}
          </select>
</div>
          <button className='filterbutton' onClick={handleSubmit}>Filter</button>
 
</div>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
