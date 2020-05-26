import React, { useState }from "react";

import "../App.css";

function SearchBar(props) {
  const [inputValue, setInputValue] = useState({
    query: "",
    results: {},
    loading: false,
    message: ""
  });


  const handleChange = event => {
    const query = event.target.value;
    setInputValue({ query, loading: true, message: "" });
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    setInputValue({
      query: "",
      results: {},
      loading: false,
      message: ""
    });
  };


  return (
    <div className="container">
      
      <form>
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value={inputValue.query}
            id="search-input"
            placeholder="Search..."
            onChange={handleChange}
            onSubmit={() => handleSubmit()}
          />
          <i className="fa fa-search search-icon" />
            {/* <img className="search-icon" src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Search Icon" /> */}

        </label>
      </form>
    </div>
  );
}



export default SearchBar