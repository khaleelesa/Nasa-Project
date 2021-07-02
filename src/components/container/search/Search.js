import React, { useState, useEffect } from "react";
import MediaCard from "../media/MediaCard";
import "../../../styles/Search.css";
const axios = require("axios");
export default function Search() {
  const [media, setMedia] = useState([]);
  const [userInput, setUserinput] = useState("");

  const getMediaFromApi = async () => {
    let results = await axios.get(
      `https://images-api.nasa.gov/search?q=${userInput}&media_type=image`
    );
    results = results.data.collection.items.map((result) => {
      return {
        id: result.data[0].nasa_id,
        img: {
          title: result.data[0].title || "",
          url: result.links[0].href || "",
        },
      };
    });
    setMedia(results);
  };

  const changeInput = (event) => {
    setUserinput(event.target.value);
  };
  const saveImage = async (img) => {
    const result = await axios.post("http://localhost:4200/image", img);
  };

  return (
    <div className="search">
      <div className="search-bar">
        <input
          type="text"
          value={userInput}
          placeholder=" enter what you want"
          onChange={changeInput}
        />
        <button onClick={getMediaFromApi}>search</button>
      </div>
      <div className="searchResults">
        {media.map((r) => (
          <MediaCard
            media={r.img}
            key={r.id}
            smallImg={true}
            saveImage={saveImage}
          />
        ))}
      </div>
    </div>
  );
}
