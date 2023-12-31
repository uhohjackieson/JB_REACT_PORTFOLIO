import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import backgroundImg from "../assets/pawel-czerwinski-1k9lY4WWXJ0-unsplash.png";
import profileImg from "../assets/20231206_105126.png";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={backgroundImg}
      />
      {/* this will make the bg white but let the image still peek through with the opacity :) */}
      <div
        className="w-full h-screen absolute top-0 left-0 bg-white
       opacity-50"
      >
        <div
          className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center bg-white
       "
        >
          <div className="flex flex-col">
            <h1
              className="sm:text-5xl text-4xl font-bold text-gray-800
    "
            >
              Hi! I'm Jaclyn Barbieri
            </h1>
            <h2
              className="flex sm:text-3xl text-2xl pt-4 text-gray-800
  "
            >
              I'm a
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Fullstack Software Developer",
                  4000, // wait 4s before replacing words
                  "Coder",
                  1000,
                  "Software Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
                repeat={Infinity}
              />
            </h2>
            <div className="right-60 top-40">
              <img
                src={profileImg}
                className="w-[20rem] h-[20rem] object-cover rounded-full"
                style={{ opacity: 1 }}
              />
            </div>
          </div>
          {/* for social icons */}
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/jaclyn-barbieri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/uhohjackieson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <FaInstagram size={20} />
            <FaFacebook size={20} />
          </div>
        </div>
      </div>
      {/* <div className="absolute right-60 top-40">
        <img
          src={profileImg}
          className="w-[20rem] h-[20rem] object-cover rounded-full"
          style={{ opacity: 1 }}
        />
      </div> */}
    </div>
  );
};

export default Main;
