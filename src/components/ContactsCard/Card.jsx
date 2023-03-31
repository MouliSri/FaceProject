import React from "react";
import Avatar from "./Avatar";
import Details from "./details";

export default function Card(props) {
  return (
    <div className="card1">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar className="card-image "img={props.img} />
      </div>
      <div className="bottom">
        <Details detail={props.phone} />
        <Details detail={props.email} />
      </div>
    </div>
  );
}