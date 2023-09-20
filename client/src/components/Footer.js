import React from "react";

export default function Footer() {
  return (
    <div className="footer px-6 md:px-8 lg:px-32 pt-24 pb-8 bg-dark text-light">
      <div className="footer-upper flex mb-10">
        <div className="col-1 w-3/5">
          <h2 className="capitalize">proteron</h2>
          <p className="text-accent">Creating your digital presence.</p>
        </div>
        <div className="col-2 w-1/5">
          <h3>Company</h3>
          <p className="capitalize text-accent"><a href="/">about</a></p>
          <p className="capitalize text-accent"><a href="/">career</a></p>
          <p className="capitalize text-accent"><a href="/">case studies</a></p>
        </div>
        <div className="col-3 w-1/5">
          <h3>Social</h3>
          <p className="capitalize text-accent"><a href="/">facebook</a></p>
          <p className="capitalize text-accent"><a href="/">instagram</a></p>
          <p className="capitalize text-accent"><a href="/">linkedIn</a></p>
          <p className="capitalize text-accent"><a href="/"></a>behance</p>
        </div>
      </div>
      <hr className="border-accent"/>
      <div className="footer-lower flex justify-between mt-5">
        <div className="col-1">
          <p className="text-accent">2023</p>
        </div>
        <div className="col-2">
          <p className="text-accent">Copyright @ Proteron Digital</p>
        </div>
        <div className="col-3">
          <p className="text-accent">Terms and Services</p>
        </div>
      </div>
    </div>
  );
}
