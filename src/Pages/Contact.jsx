import Navbar from '../Components/Navbar'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PageTransition } from '../Components/PageTransition';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2l7878z', 'template_127f0vt', form.current, {
        publicKey: 'a_RhGZpJhMCtKEGkD',
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log( error.text);
        },
      );
      e.target.reset()
  };
  return (
    <PageTransition>
    <div className=' h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
<div className=' flex flex-col p-4 justify-center'>
  <div>
<p className=' text-3xl font-bold inline border-b-4 border-orange-500'>Contact</p>
<p className=' py-2'>Submit the form below to get in touch with me.</p>
  </div>
  <div className=' flex justify-center items-center py-4'>
    <form action="" className=' flex flex-col w-34 '>
      <input type="text" 
      placeholder='Enter your name'
      className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
      />

<input type="text" 
      
      placeholder='Enter your email'
      className='mt-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
      />
<textarea className=' mt-8 p-14  bg-transparent border-2 rounded-md text-white focus:outline-none ' placeholder='Enter Your Messages' name="" id="">
  
  </textarea>
  <button className=' p-5 font-bold text-xl text-white bg-gradient-to-b from-red-600 to-green-900 px-6 py-1 my-4 hover:scale-110 duration-300' >Send</button>      
    </form>
  </div>
</div>
<Navbar className=' '/>

    </div>
    </PageTransition>
  )
}

export default Contact