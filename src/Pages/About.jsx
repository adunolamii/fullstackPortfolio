import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import pic from '../Components/profile.jpg'
import { IoArrowForward } from "react-icons/io5";
// import Typewriter from 'typewriter-effect';
// import { frame } from 'framer-motion';
import { PageTransition } from '../Components/PageTransition';


function About() {
  const navigate =useNavigate();

  return (
    <PageTransition>

<div className=' h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
    
   
    
        <h4 className=' text-white py-1  text-xl font-bold inline border-b-4 border-y-pink-500'>Get to <span className='font-bold  text-2xl'>know Me.</span> </h4>
   <div className=' mt-4 flex'>
        <div className='relative bg-blue-300 w-64 h-64 rounded-3xl m-auto my-4 rounded-t-10 rounded-b-none rounded-t-full'>
          <img className='w-44 h-44 m-auto object-cover mt-16 ' src={pic} alt="" />
        </div>
   </div>
  
  
   <div>
     <h1 className=' text-white items-center justify-center px-12'>I am an expert in <span className='font-bold text-pink-500 text-2xl'>MERN STACK</span>  Development. I design, create and deploy a complete application from scratch to finish with the use of various tools. </h1>
   </div>

    <div className='flex justify-evenly  group-hover:rotate-90 duration-300'>
      {/* <button className=' p-5 font-bold text-xl text-white bg-gradient-to-b from-pink-600 to-purple-900 px-6 py-3 my-8 hover:scale-110 duration-300' onClick={()=>{navigate('/contact')}}>Contact ME</button> */}
      {/* <button className=' bg-orange-500 w-40  h-9 rounded-xl text-white text-xl font-bold'>Contact ME</button> */}
    
      <button className=' p-2 font-bold text-xl text-white bg-gradient-to-b from-pink-600 to-purple-900 px-6 py-2 my-8 hover:scale-110 duration-300' onClick={()=>{navigate('/contact')}}>Contact ME
      <IoArrowForward className='text-bold text-white m-auto' />
      </button>
    
    </div>
   
      <Navbar className=' '/>

    
</div>
      </PageTransition>
  )
}

export default About