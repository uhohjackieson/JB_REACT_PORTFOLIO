import React from "react";
import ProjectItem from "./ProjectItem";
import tripppImg from "../assets/triPPP_team4_thumbnail.png";
import pongImg from "../assets/Screenshot 2023-12-06 at 2.52.41 PM.png";
import snakeImg from "../assets/Screenshot 2023-12-06 at 2.56.53 PM.png";

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
          img={pongImg}
          title="PONG"
          link="https://trinket.io/python/6aa5a65b74"
        />
        <ProjectItem
          img={snakeImg}
          title="Snake Game"
          link="https://github.com/uhohjackieson/snake_game"
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
