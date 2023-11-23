import React from "react";
// import Img12 from "./images/image 12.png";
import Star from "./images/star1.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`./images/${props.coverImg}`}
        alt={props.title}
        className="card-img"
      />
      <div className="card-stat">
        <img src={Star} alt="star" className="star" />

        <span className="grey">({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>From ${props.price} / person </p>
    </div>
  );
}
