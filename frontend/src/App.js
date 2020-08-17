import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios
      // https://api.unsplash.com/search/photos?page=3&query=office
      .get(`https://api.unsplash.com/search/photos?page=1&query=${query}`)
      .then((res) => {
        const response = res.result;
        setQuery(response);
      });
  }, [query, photos]);

  console.log(query);

  return (
    <div className="box">
      <form>
        <label>
          Search Photos on Unsplash
          <input
            type="search"
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </form>
      {/* <ul className="photo-grid">
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={`https://source.unsplash.com/?${keyword}`} />
            </li>
          );
        })}
      </ul> */}
      <img src={`https://source.unsplash.com/300x400/?${keyword}`} />
    </div>
  );
}

export default App;
