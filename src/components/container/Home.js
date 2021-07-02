import React, { useState, useEffect } from "react";
import MediaCard from "./media/MediaCard";
import "../../styles/Home.css";
const axios = require("axios");
export default function Home() {
  const [media, setMedia] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res.data);
        setMedia(res.data);
      });
  }, {});

  return (
    <div className="Home">
      <div className="media">
        <MediaCard media={media} smallImg={false} />
      </div>
    </div>
  );
}
