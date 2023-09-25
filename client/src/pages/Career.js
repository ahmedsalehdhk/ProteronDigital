import React from "react";
import JobCards from "../components/JobCards";

export default function Career() {
  return (
    <div className="career px-6 md:px-8 lg:px-32 pt-32 pb-16">
      <div className="career-text flex flex-col md:flex-row mb-10">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl capitalize mb-3 md:w-1/2">we're looking for</h2>
        <p className="text-accent mb-10 md:w-1/2">
          Unlock your potential by joining our dynamic team. Explore opportunities that blend innovation, collaboration, and growth. Your journey towards meaningful impact starts here
        </p>
      </div>
      <div className="career-cards flex flex-col gap-3">
        <JobCards />
        <JobCards />
        <JobCards />
      </div>
    </div>
  );
}
