import React from 'react'
import { Link } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { SiElasticstack } from "react-icons/si";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";

function Navbar() {
  return (
    <div className=' h-18'>
    <div className='text-red-600 h-12 rounded-3xl  bg-orange-400 w-80 m-auto'>
        <div className='rounded-lg flex justify-around py-3  '>
           <Link to="/"  className='home'><button><GoHome className=' text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500'/></button></Link> 
           <Link to="/about" className='about'><button><FaRegUser  className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500'/></button></Link>
           <Link to="/skills" className='skills'><btton><SiElasticstack className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500' /></btton></Link>
           <Link to="/projects" className='portfolio'><button><MdAssignmentTurnedIn className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500' /></button></Link>
           <Link to="/contact"  className='contact'><button><MdOutlineContacts className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500' /></button></Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar