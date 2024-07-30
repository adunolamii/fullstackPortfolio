import Navbar from "../Components/Navbar";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PageTransition } from "../Components/PageTransition";
// import Fade from "react-reveal/Fade";
// import Bounce from "react-reveal/Bounce";
// import Zoom from "react-reveal/Zoom";
// import Roll from 'react-reveal/Roll';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2l7878z", "template_127f0vt", form.current, {
        publicKey: "a_RhGZpJhMCtKEGkD",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  sendEmail()
  return (
    <PageTransition>
     {/* <Fade right>  */}
       <div className=" h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className=" flex flex-col p-4 justify-center">
          <div>
            <p className="  font-serif text-3xl font-bold inline border-b-4 border-y-pink-500">
              Contact
            </p>

            {/* <Zoom> */}
              <p className=" py-2">
                Submit the form below to get in touch with me.
              </p>
            {/* </Zoom> */}
          </div>
          {/* <Roll> */}
          <div className=" flex justify-center items-center py-4">
            <form action="" className=" flex flex-col w-34 ">
              <input
                type="text"
                placeholder="Enter your name"
                className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

              <input
                type="text"
                placeholder="Enter your email"
                className="mt-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                className=" mt-8 p-14  bg-transparent border-2 rounded-md text-white focus:outline-none "
                placeholder="Enter Your Messages"
                name=""
                id=""
              ></textarea>
              {/* <Bounce> */}
               
                <button className=" font-serif rounded-2xl p-5 font-bold text-xl text-white bg-gradient-to-b from-pink-600 to-purple-900 px-6 py-4 my-4 hover:scale-110 duration-300">
                  Send
                </button>
              {/* </Bounce> */}
            </form>
          </div>
          {/* </Roll> */}
        </div>

        <Navbar className=" bottom-0" />
      </div> 


      {/* </Fade> */}
    </PageTransition>
  );
}

export default Contact;
