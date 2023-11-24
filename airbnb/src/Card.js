import React from "react";
// import Img12 from "./images/image 12.png";
import Star from "./images/star1.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.props.coverImg} alt={props.title} className="card-img" />
      <div className="card-stat">
        <img src={Star} alt="star" className="star" />
        <span>{props.props.stats.rating}</span>
        <span className="grey">({props.props.stats.reviewCount}) • </span>
        <span className="grey">{props.props.location}</span>
      </div>
      <p>{props.props.title}</p>
      <p>From ${props.props.price} / person </p>
    </div>
  );
}
