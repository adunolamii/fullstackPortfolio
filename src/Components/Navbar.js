import React from 'react'
import { Link } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { SiElasticstack } from "react-icons/si";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

function Navbar() {
  return (
    <div className='sticky h-18'>
    <div className='h-12 rounded-3xl  bg-blue-400 w-80 m-auto backdrop-blur-3xl'>
        <div className='  rounded-lg flex justify-around py-3'>
           <Link to="/"  className='home'><button><GoHome className=' text-white hover:scale-110 duration-600  text-xl  hover:to-orange-500'/></button></Link> 
           <Link to="/about" className='about'><button><FaRegUser  className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500'/></button></Link>
           <Link to="/skills" className='skills'><btton><BsPersonWorkspace  className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500' /></btton></Link>
           <Link to="/projects" className='portfolio'><button><MdAssignmentTurnedIn className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500' /></button></Link>
           <Link to="/contact"  className='contact'><button>< MdContactEmergency className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500' /></button></Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar