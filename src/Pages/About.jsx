import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import pic from "../Components/pic.jpg";
import { IoArrowForward } from "react-icons/io5";
// import Zoom from "react-reveal/Zoom";
// import Roll from "react-reveal/Roll";
// import Fade from "react-reveal/Fade";
// import Bounce from "react-reveal/Bounce";
import { PageTransition } from "../Components/PageTransition";

function About() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* <Fade right> */}
      <div className=" h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <h4 className=" font-serif text-white  text-xl font-bold inline border-b-4 border-y-pink-500">
          Get to <span className="font-bold  text-2xl">know Me.</span>{" "}
        </h4>
        {/* <Roll> */}
          <div className=" flex">
            <div className="relative bg-gradient-to-b from-pink-600 to-purple-900 w-64 h-64 rounded-3xl m-auto my-4 rounded-t-10 rounded-b-none rounded-t-full">
              <img
                className="-48 h-56 mt-4  m-auto object-cover  rounded-3xl rounded-t-20 rounded-b-none"
                src={pic}
                alt=""
              />
            </div>
          </div>
        {/* </Roll> */}

        {/* <Zoom> */}
          <div>
            {/* <Fade> */}
            <h1 className=" font-extralight text-white items-center justify-center px-12">
              I am an expert in{" "}
              <span className="font-bold text-pink-500 text-2xl">
                MERN STACK
              </span>{" "}
              Development. I architect, develop, and deploy comprehensive applications from inception to completion, leveraging a diverse array of tools and technologies.{" "}
            </h1>
            {/* </Fade> */}
          </div>
          {/* </Zoom> */}

        {/* // <Bounce> */}
          <div className="flex justify-evenly  group-hover:rotate-90 duration-300">
            <button
              className=" font-serif rounded-2xl font-bold text-xl text-white bg-gradient-to-b from-pink-600 to-purple-900 px-6 my-8 hover:scale-110 duration-300"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact ME
              <IoArrowForward className="text-bold text-white m-auto" />
            </button>
          </div>
        {/* </Bounce> */}
        <Navbar className=" " />
      </div>
      {/* </Fade> */}
    </PageTransition>
  );
}

export default About;
