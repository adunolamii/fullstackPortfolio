import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate =useNavigate();
  return (
    <div  className=' h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
    <div> 
      <h4 className=' text-white py-1 text-xl font-bold inline border-b-4'>Hello! <span className='font-bold text-orange-500'> Its Me.</span> </h4>
      <h3 className=' text-white font-bold text-2xl py-3'>Adunola Adenike Taiwo</h3>
      <h1 className=' text-white items-center px-10'>This is my official Portfolio Website to showcase all my works related to Full-Stack Development. </h1>
      
      <div className='flex justify-evenly group-hover:rotate-90 duration-300'>
      <button className=' p-5 font-bold text-xl text-white bg-gradient-to-b from-red-600 to-green-900 px-6 py-3 my-8 hover:scale-110 duration-300'>RESUME</button>
      <button className=' p-5 font-bold text-xl text-white bg-gradient-to-b from-red-600 to-green-900 px-6 py-3 my-8 hover:scale-110 duration-300' onClick={()=>{navigate('/contact')}}>Contact ME</button>
      </div>
      
      <div className=' flex'>
    
        <div className=' rounded-full relative bg-blue-300 w-64 h-64 m-auto mb-6'>iiiii</div>
       
      </div>
      <Navbar/>
      
       
    </div>
    </div>
  )
}

export default Home