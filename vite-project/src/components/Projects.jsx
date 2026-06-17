import React from "react";
import ProjectItem from "./ProjectItem";
import tripppImg from "../assets/triPPP_team4_thumbnail.png";
import plumbingImg from "../assets/PlumbingSitePic.png";
import jobTrackerImg from "../assets/JobTracker.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#5e0037]">
        Projects
      </h1>
      <p className="text-center py-8">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        recusandae eius itaque sed delectus fugit reiciendis voluptas accusamus
        ullam impedit! Nulla expedita alias atque asperiores ex, quos doloribus
        incidunt dolorem? */}
      </p>
      <div className="grid sm:grid-cols-1 gap-12">
        <ProjectItem
          img={tripppImg}
          title="triPPP"
          link="https://trippp.onrender.com/"
        />
        <ProjectItem
          img={jobTrackerImg}
          title="Job Tracker"
          link="https://job-tracker-omega-wine.vercel.app/dashboard"
        />
        <ProjectItem
          img={plumbingImg}
          title="Plumbing"
          link="https://boilersbydan.vercel.app/"
        />
        {/* <ProjectItem
          img={"../../images/vincentiu-solomon-ln5drpv_ImI-unsplash.png"}
          title=""
          link=""
        /> */}
      </div>
    </div>
  );
};

export default Projects;
