import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Medical Scribe",
    duration: "9 months",
    details: "",
  },

  {
    year: 2022,
    title: "",
    duration: "",
    details: "",
  },
  {
    year: 2022,
    title: "",
    duration: "",
    details: "",
  },
  {
    year: 2022,
    title: "",
    duration: "",
    details: "",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#5e0037]">Work</h1>
      {/* using parentheses here instead of curly braces to render out elements on screen*/}
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
