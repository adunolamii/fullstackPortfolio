import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";


function NavItem({to, icon}) {
   return(
     <NavLink to={to} className="hover:scale-110 duration-200  text-xl rounded-lg hover:bg-gradient-to-b from-pink-600 to-purple-900">
     {icon}
     </NavLink>
     );
   }
function Navbar() {
  return (
    <div className='sticky h-18'>
    <div className='h-12 rounded-3xl  bg-blue-400 w-80 m-auto backdrop-blur-3xl '>
        <div className='  rounded-lg flex justify-around py-3'>
        <NavItem to="/" icon={<GoHome/>} className='about'><button><GoHome className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500'/></button></NavItem>
        <NavItem to="/about" icon={<FaRegUser/>} className='about'><button><FaRegUser className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500'/></button></NavItem>
        <NavItem to="/skills" icon={<BsPersonWorkspace/>} className='about'><button><BsPersonWorkspace className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500'/></button></NavItem>
        <NavItem to="/projects" icon={<MdAssignmentTurnedIn/>} className='about'><button><MdAssignmentTurnedIn className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500'/></button></NavItem>
        <NavItem to="/contact" icon={<MdContactEmergency/>} className='about'><button><MdContactEmergency className='text-white hover:scale-110 duration-200  text-xl  hover:to-orange-500'/></button></NavItem>

    </div>
    </div>
    </div>
  )
}

export default Navbar