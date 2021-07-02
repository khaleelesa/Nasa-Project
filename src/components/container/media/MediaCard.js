import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/mediaCard.css";
export default function MediaCard(props) {
  let media = props.media;
  let path = useLocation();
  const renderLinkUnlike = () => {
    if (path.pathname === "/search" || path.pathname === "/favorits") {
      if (props.like) {
        return (
          <button onClick={() => props.deleteImg(props.id)}>
            <FontAwesomeIcon icon={faHeartBroken} />
          </button>
        );
      } else {
        return (
          <button onClick={() => props.saveImage(media)}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        );
      }
    }
  };
  return (
    <div className="MediaCard">
      <span className="title">{media.title}</span>
      <img className={props.smallImg ? "smallImg" : "bigImg"} src={media.url} />
      <div className="info">{media.explanation}</div>
      {renderLinkUnlike()}
    </div>
  );
}
