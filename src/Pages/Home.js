import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Typewriter from "typewriter-effect";
import { PageTransition } from "../Components/PageTransition";
import pic from "../Components/pic.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Fade left>
      <div className=" h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div>
          <h4 className=" font-serif text-white py-1 text-xl font-bold inline border-b-4 border-y-pink-500 ">
            Hello!{" "}
            <span className="font-bold text- from-pink-600 to-purple-900">
              {" "}
              Its Me.
            </span>{" "}
          </h4>
          <h3 className="  font-mono font-bold text-2xl py-1 text-pink-500">
            Adunola Adenike Taiwo
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 20,
                strings: ["And I am a MERN STACK Developer!"],
              }}
            />
          </h3>
          <Zoom>
            <h1 className=" text-white items-center px-10 font-extralight">
              This is my official Portfolio Website to showcase all my works
              related to Full-Stack Development.{" "}
            </h1>
          </Zoom>
          <Bounce>
            <div className="flex justify-evenly group-hover:rotate-90 duration-300">
              <button
                className=" font-serif rounded-2xl p-5 font-bold text-xl text-white bg-gradient-to-b from-pink-600 to-purple-900 px-6 py-2 my-8 hover:scale-110 duration-300"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact ME
                <IoArrowForward className="text-bold text-white m-auto" />
              </button>
            </div>
          </Bounce>
          <Roll>
            <div className=" flex">
              <div className="bg-gradient-to-b from-pink-600 to-purple-900 rounded-2xl relative bg-blue-300 w-64 h-60 m-auto mb-6">
                <img className=" -44 h-56 mt-2  m-auto object-cover  rounded-2xl" src={pic} alt="" />
              </div>
            </div>
          </Roll>

          <Navbar />
        </div>
      </div>
      </Fade>
    </PageTransition>
  );
}

export default Home;
