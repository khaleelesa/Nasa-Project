import React, { useState, useEffect } from "react";
import MediaCard from "./media/MediaCard";
import "../../styles/Favourites.css";
const axios = require("axios");
export default function Favourites() {
  const [images, setImages] = useState([]);
  const [isremoved, setIsRemoved] = useState(false);

  const getImagesFromDb = async () => {
    let results = await axios.get(`http://localhost:4200/images`);
    results = results.data.map((v) => {
      return {
        id: v._id,
        img: { title: v.title, url: v.url },
      };
    });
    setImages(results);
  };

  const deleteImg = async (id) => {
    const result = await axios.delete("http://localhost:4200/image/" + id);
    if (result.status != 200) {
      alert("error");
    } else {
      alert("removed");
      setIsRemoved(!isremoved);
    }
  };

  useEffect(() => {
    getImagesFromDb();
  }, [isremoved]);

  return (
    <div className="Favorites">
      <div className="searchResults">
        {images.map((v) => (
          <MediaCard
            media={v.img}
            id={v.id}
            key={v.id}
            deleteImg={deleteImg}
            like={true}
            smallImg={true}
          />
        ))}
      </div>
    </div>
  );
}
