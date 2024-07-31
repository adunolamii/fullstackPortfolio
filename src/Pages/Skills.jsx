import React from "react";
import { PageTransition } from "../Components/PageTransition";
import Navbar from "../Components/Navbar";
import image1 from "../Components/react2.png";
import image2 from "../Components/javascript.png";
import image3 from "../Components/tailwind.png";
import image4 from "../Components/mongodb.png";
import image5 from "../Components/github.png";
import image6 from "../Components/node.png";
import image7 from "../Components/express.png";
import image8 from "../Components/postman.png";
// import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";

function Skills() {
  const techs = [
    {
      id: 1,
      src: image2,
      title: "JAVASCRIPT",
      style: "shadow-yellow-600",
    },

    {
      id: 2,
      src: image1,
      title: "REACT",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: image3,
      title: "TAILWIND CSS",
      style: "shadow-blue-900",
    },
    {
      id: 4,
      src: image6,
      title: "NODE JS",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: image4,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: image7,
      title: "EXPRESS JS",
      style: "shadow-green-800",
    },
    {
      id: 7,
      src: image5,
      title: "GITHUB",
      style: "shadow-green-800",
    },
    {
      id: 8,
      src: image8,
      title: "POSTMAN",
      style: "shadow-red-800",
    },
  ];
  return (
    <PageTransition>
   
      <div className=" h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <p className=" font-serif text-2xl font-bold border-b-4 border-y-pink-500 inline top-0">
          Experiences.
        </p>

        {/* <Flip> */}
          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  px-16 sm:px-0 top-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={` h-28 top-0 shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}
              >
                <img src={src} alt="" className=" top-0 w-24 mx-auto" />
                <p className=" h-4 top-0 font-bold ">{title}</p>
              </div>
            ))}
          </div>
       
        <Navbar className=" " />
      </div>
      
    </PageTransition>
  );
}

export default Skills;
