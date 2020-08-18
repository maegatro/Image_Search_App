import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  // const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getPhotos = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: keyword,
        client_id: `${API_KEY}`,
      },
      // headers: {
      //   Authorization: "2-845ep38EjucmvKrUMPtGw8mudOjho7xSt4qc-KTgM",
      // },
    });
    setPhotos(response.data.results);
  };

  useEffect(() => {
    getPhotos();
  }, [keyword]);

  return (
    <div className="box">
      <form>
        <label>
          Search Photos on Unsplash
          <input
            type="search"
            placeholder="search"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </label>
      </form>
      <ul className="photo-grid">
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.urls.regular} />
            </li>
          );
        })}
      </ul>
      {/* <img src={`https://source.unsplash.com/300x400/?${keyword}`} /> */}
    </div>
  );
}

export default App;
