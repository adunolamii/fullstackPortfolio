import React from "react";
import Navbar from "../Components/Navbar";
import image1 from "../Components/event.png";
// import image2 from "../Components/real estate.jpg";
import image3 from "../Components/movie.png";
import image4 from "../Components/country.jpg";
import image5 from "../Components/blog.png";
import image6 from "../Components/crime spotter.jpg";
// import image7 from "../Components/crime spotter2.jpg";
import image8 from "../Components/fin tracker1.jpg";
// import image9 from "../Components/fin tracker 2.jpg";
// import image10 from "../Components/online sch 1.jpg";
import image11 from "../Components/online sch 2.jpg";
import { PageTransition } from "../Components/PageTransition";

function Projects() {
  // LINK TO LIVE
  const handleEventLink = () => {
    window.open("()", "_blank");
  };
  const handleblogApplicationLink = () => {
    window.open("()", "_blank");
  };
  const handleMovieLink = () => {
    window.open("(movie-2f1dw14bc-devtee.vercel.app)", "_blank");
  };
  const handleCountryLink = () => {
    window.open("(country-api-eta.vercel.app/)", "_blank");
  };
  const handleCrimeApplicationLink = () => {
    window.open("https://crime-reporting-app-self.vercel.app/", "_blank");
  };
   const handleOnlineSchoolingApp = () => {
    window.open("https://onlin-shooling-ajocremay.vercel.app/", "_blank");
  };
  
  //  SOURCE IMAGE DISPLAY
  const projects = [
    {
      id: 1,
      src: "image1",
      href: "https://movie-app-rosy-kappa.vercel.app/",
      download: true,
    },
  ];





  // LINK TO GITHUB CODE
  const githubCountry = [
    { url: "(https://github.com/adunolamii/countryAPI.git)" },
  ];
  const handleCountry = (url) => {
    window.open(url, "_blank");
  };

  const githubMovie = [{ url: "(https://github.com/adunolamii/movieApp.git)" }];
  const handleMovie = (url) => {
    window.open(url, "_blank");
  };
  const githubblogApplication = [
    { url: "(https://github.com/adunolamii/blogApp/)" },
  ];
  const handleblogApplication = (url) => {
    window.open(url, "_blank");
  };

  const githubEvent = [
    { url: "(https://github.com/adunolamii/eventApplication.git)" },
  ];
  const handleEvent = (url) => {
    window.open(url, "_blank");
  };
  const githubCrimeApp = [
    { url: "https://github.com/adunolamii/crime-reporting-app)" },
  ];
  const handleCrimeApp = (url) => {
    window.open(url, "_blank");
  };

   const githubOnlineSchooling = [
    { url: "https://github.com/adunolamii/crime-reporting-app)" },
  ];
  const handleOnlineSchoolingLink = (url) => {
    window.open(url, "_blank");
  };
    const githubFinancialApp = [
    { url: "https://github.com/adunolamii/saasApplication)" },
  ];
  const handleFinancialApp = (url) => {
    window.open(url, "_blank");
  };

  return (
    <PageTransition>
      <div className="tablet:max-w-full  gap-8 w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white md:h-screen top-0">
        <div className="tablet:max-w-md  max-w-screen-sd p-4 mx-auto  flex-col justify-center w-fulll h-full top-0">
          <div className="top-0">
            <p className=" font-serif py-0 text-2xl font-bold inline  border-b-4 border-y-pink-500 top-0">
              Portfolio.
            </p>
            <p className="top-0 py-2">
              Check out some of my Projects right here.
            </p>
          </div>

{/* ADD NEXT PROJECT HERE */}
                            
         <div className="tablet: flex flex-col gap-14">
          <div className="tablet:max-w-md top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
             
             {/* CRIME APP */}
             {projects.map(({ id, src, href, download }) => (
                <div
                  key={id}
                  className="tablet:max-w-md top-0 shadow-md shadow-white rounded-lg"
                >
                  <img
                    download={download}
                    //  target="_blank"
                    href={href}
                    src={image6}
                    alt=""
                    className="tablet:max-w-md w-full top-0 m-auto rounded-md duration-200 hover:scale-105"
                  />
                  <div className="top-0 flex justify-center items-center">
                    {githubCrimeApp.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleCrimeApp(link.url)}
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Code
                      </button>
                    ))}
                    <button
                      onClick={handleCrimeApplicationLink}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Live
                    </button>
                  </div>
                </div>
              ))}
             
             {/* FIN APP */}
             {projects.map(({ id, src, href, download }) => (
                <div
                  key={id}
                  className="tablet:max-w-md top-0 shadow-md shadow-white rounded-lg"
                >
                  <img
                    download={download}
                    //  target="_blank"
                    href={href}
                    src={image8}
                    alt=""
                    className="tablet:max-w-md w-full top-0 m-auto rounded-md duration-200 hover:scale-105"
                  />
                  <div className="top-0 flex justify-center items-center">
                    {githubFinancialApp.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleFinancialApp(link.url)}
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Code
                      </button>
                    ))}
                    <button
                      onClick={handleFinancialApp}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Live
                    </button>
                  </div>
                </div>
              ))}

              {/* ONLINE SCHooling */}
              {projects.map(({ id, src, href, download }) => (
                <div
                  key={id}
                  className="tablet:max-w-md top-0 shadow-md shadow-white rounded-lg"
                >
                  <img
                    download={download}
                    //  target="_blank"
                    href={href}
                    src={image11}
                    alt=""
                    className="tablet:max-w-md w-full top-0 m-auto rounded-md duration-200 hover:scale-105"
                  />
                  <div className="top-0 flex justify-center items-center">
                    {githubOnlineSchooling.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleOnlineSchoolingApp(link.url)}
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Code
                      </button>
                    ))}
                    <button
                      onClick={handleOnlineSchoolingLink}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Live
                    </button>
                  </div>
                </div>
              ))}
             
             {/* EVENT App */}
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
                    {githubEvent.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleEvent(link.url)}
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Code
                      </button>
                    ))}
                    <button
                      onClick={handleEventLink}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Live
                    </button>
                  </div>
                </div>
              ))}
              
            </div>


            
            {/* BLOG App */}

            <div className="tablet:max-w-md top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
              {projects.map(({ id, src, href, download }) => (
                <div
                  key={id}
                  className="tablet:max-w-md top-0 shadow-md shadow-white rounded-lg"
                >
                  <img
                    download={download}
                    //  target="_blank"
                    href={href}
                    src={image5}
                    alt=""
                    className="tablet:max-w-md w-full top-0 m-auto rounded-md duration-200 hover:scale-105"
                  />
                  <div className="top-0 flex justify-center items-center">
                    {githubblogApplication.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleblogApplication(link.url)}
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Code
                      </button>
                    ))}
                    <button
                      onClick={handleblogApplicationLink}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Live
                    </button>
                  </div>
                </div>
              ))}
            </div> 

                  {/* MOVIE App */}
            <div className="tablet:max-w-md top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
              {projects.map(({ id, src, href, download }) => (
                <div
                  key={id}
                  className="tablet:max-w-md top-0 shadow-md shadow-green-600 rounded-lg"
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
                    {githubMovie.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleMovie(link.url)}
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Code
                      </button>
                    ))}
                    <button
                      onClick={handleMovieLink}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Live
                    </button>
                  </div>
                </div>
              ))}
            </div>
                {/* COUNTRY API */}
            <div className="tablet:max-w-md top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
              {projects.map(({ id, src, href, download }) => (
                <div
                  key={id}
                  className="tablet:max-w-md top-0 shadow-md shadow-gray-600 rounded-lg"
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
                    {githubCountry.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleCountry(link.url)}
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Code
                      </button>
                    ))}

                    <button
                      onClick={handleCountryLink}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Live
                    </button>
                  </div>
                </div>
              ))}
            </div>

            

          
          </div>
          <div />
        </div>
        
        <Navbar className="fixed bottom-0" />
      </div>
      <div />
      <div />
      <div/>
    </PageTransition>
  );
}
export default Projects;
