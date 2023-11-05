import React from "react";

export default function ServiceCard(props) {
  return (
    <div className="cards bg-light text-dark w-64 h-full">
      <div className="image-container overflow-hidden">
        <div className="card-image bg-lightAccent h-64 w-64 transition-all bg-cover"></div>
      </div>
      <div className="card-text py-5 px-3">
        <h3 className="font-medium capitalize mb-3">{props.title}</h3>
        <p className="text-accent">{props.content}</p>
      </div>
    </div>
  );
}
