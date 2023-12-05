import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="../../images/pawel-czerwinski-1k9lY4WWXJ0-unsplash.png"
        alt=""
      />
      {/* this will make the bg white but let the image still peek through with the opacity :) */}
      <div
        className="w-full h-screen absolute top-0 left-0 bg-white
       opacity-50"
      >
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Jaclyn Barbieri
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Fullstack Software Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Guitarist",
                1000,
                "Fitness Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          {/* for social icons */}
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaLinkedin size={20} />
            <FaGithub size={20} />
            <FaInstagram size={20} />
            <FaFacebook size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
