import React from "react";
import { Link } from "react-router-dom";

import ButtonDark from "../components/ButtonDark";

export default function Service(props) {
  return (
    <div className="min-h-screen pb-8 px-6 md:px-8 lg:px-32 flex flex-col gap-10 pt-32">
      <div className="service-text flex flex-col lg:flex-row justify-between gap-3 lg:gap-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl capitalize mb-3">{props.title}</h1>
        <div className="lg:w-1/2">
          <p className="mb-3 text-accent">{props.content}</p>
          <Link onClick={() => console.log("send quotation req")}>
            <ButtonDark text="get quotation" />
          </Link>
        </div>
      </div>
      <div className="service-image px-6 md:px-8 lg:px-32 bg-dark grow">IMAGE GOES HERE</div>
    </div>
  );
}
