import React from "react";
import Navbar from "../Components/Navbar";
import image1 from "../Components/event.png";
import image2 from "../Components/real estate.jpg";
import image3 from "../Components/movie.png";
import image4 from "../Components/country.jpg";
import Fade from "react-reveal/Fade";
import { PageTransition } from "../Components/PageTransition";

function Projects() {

  // LINK TO LIVE
  const handleEventLink=()=>{
    window.open("()",
      "_blank"
    );
  }
  const handleEstateLink=()=>{
    window.open("()",
      "_blank"
    );
  }
  const handleMovieLink=()=>{
    window.open("(movie-2f1dw14bc-devtee.vercel.app)",
      "_blank"
    );
  }
  const handleCountryLink=()=>{
    window.open("(country-api-eta.vercel.app/)",
      "_blank"
    );
  }
  //  SOURCE IMAGE DISPLAY
  const projects = [
    {
      id: 1,
      src: "image1",
      href: "https://movie-app-rosy-kappa.vercel.app/",
      download: true,
     
    },

  ];

  // LINK TO CODE
  const githubCountry =[
    { url:"(https://github.com/adunolamii/countryAPI.git)"},
   
  ];
  const handleCountry = (url)=>{
    window.open(url,'_blank')
  };

  const githubMovie =[
    { url:"(https://github.com/adunolamii/movieApp.git)"},
   
  ];
  const handleMovie = (url)=>{
    window.open(url,'_blank')
  }
  const githubEstate =[
    { url:"()"},
   
  ];
  const handleEstate = (url)=>{
    window.open(url,'_blank')
  }

  const githubEvent =[
    { url:"(https://github.com/adunolamii/eventApplication.git)"},
   
  ];
  const handleEvent = (url)=>{
    window.open(url,'_blank')
  }
  

  return (
    <PageTransition>
      <Fade left>
       <div className="tablet:max-w-full  gap-8 w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white md:h-screen top-0">
        <div className="tablet:max-w-md  max-w-screen-sd p-4 mx-auto  flex-col justify-center w-fulll h-full top-0">
          <div className="top-0" >
            <p className=" font-serif py-0 text-2xl font-bold inline  border-b-4 border-y-pink-500 top-0">
              Portfolio
            </p>
            <p className="top-0 py-2">
              Check out some of my Projects right here.
            </p>
          </div>
<div className="tablet: flex flex-col gap-14">
          <div className="tablet:max-w-md top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, href, download }) => (
              <div
                key={id}
                className="tablet:max-w-md top-0 shadow-md shadow-purple-600 rounded-lg"
               
              >
                <img
                 download={download}
                //  target="_blank"
                 href={href}
                  src={image1}
                  alt=""
                  className="tablet:max-w-md w-full top-0 m-auto rounded-md duration-200 hover:scale-105"
                 
                />
               <div className="top-0 flex justify-center items-center">
                  {githubEvent.map((link,index)=>(<button key={index} onClick={()=> handleEvent(link.url)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   Code
                  </button>))}
                  <button onClick={handleEventLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Live</button>


                </div>
              </div>
            ))}
          </div>
          
          <div className="tablet:max-w-md top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, href, download }) => (
              <div
                key={id}
                className="tablet:max-w-md top-0 shadow-md shadow-purple-600 rounded-lg"
               
              >
                <img
                 download={download}
                //  target="_blank"
                 href={href}
                  src={image2}
                  alt=""
                  className="tablet:max-w-md w-full top-0 m-auto rounded-md duration-200 hover:scale-105"
                 
                />
                <div className="top-0 flex justify-center items-center">
                  {githubEstate.map((link,index)=>(<button key={index} onClick={()=> handleEstate(link.url)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   Code
                  </button>))}
                  <button onClick={handleEstateLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Live</button>


                </div>
              </div>
            ))}
          </div>

          <div className="tablet:max-w-md top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, href, download }) => (
              <div
                key={id}
                className="tablet:max-w-md top-0 shadow-md shadow-purple-600 rounded-lg"
               
              >
                <img
                 download={download}
                //  target="_blank"
                 href={href}
                  src={image3}
                  alt=""
                  className="tablet:max-w-md w-full top-0 m-auto rounded-md duration-200 hover:scale-105"
                 
                />
                <div className="top-0 flex justify-center items-center">
                  {githubMovie.map((link,index)=>(<button key={index} onClick={()=> handleMovie(link.url)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   Code
                  </button>))}
                  <button onClick={handleMovieLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Live</button>


                </div>
              </div>
            ))}
          </div>
          
          <div className="tablet:max-w-md top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, href, download }) => (
              <div
                key={id}
                className="tablet:max-w-md top-0 shadow-md shadow-purple-600 rounded-lg"
               
              >
                <img
                 download={download}
                //  target="_blank"
                 href={href}
                  src={image4}
                  alt=""
                  className="tablet:max-w-md w-full top-0 m-auto rounded-md duration-200 hover:scale-105"
                 
                />
                <div className="top-0 flex justify-center items-center">
                  {githubCountry.map((link,index)=>(<button key={index} onClick={()=> handleCountry(link.url)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   Code
                  </button>))}
                  
                  <button onClick={handleCountryLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Live</button>


                </div>
              </div>
            ))}
          </div>
 </div>
               <div/>  
               </div>
      
              <Navbar className="fixed bottom-0" />
              </div>
              <div/>
              <div/>       
              </Fade>
      </PageTransition>
      
 );
}
export default Projects;


