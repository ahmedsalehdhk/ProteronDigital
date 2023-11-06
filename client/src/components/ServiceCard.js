import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard(props) {
  return (
    <div className="card bg-light text-dark w-64 h-full">
      <div className="image-container overflow-hidden">
        <div className="card-image bg-lightAccent h-64 w-64 transition-all bg-cover bg-center" id={props.id}></div>
      </div>
      <div className="card-text py-5 px-3">
        <Link to={props.id}>
          <h3 className="font-medium capitalize mb-3 hover:underline">{props.title}</h3>
        </Link>
        <p className="text-accent">{props.content}</p>
      </div>
    </div>
  );
}
