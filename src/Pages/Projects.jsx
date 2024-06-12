import React from 'react'
import Navbar from '../Components/Navbar'
import image1 from "../Components/download.jpg"

function Projects() {
const pro =[
  {
  id:1,
  src:"image1",
},

  {
  id:2,
  src:"image1",
},
  {
  id:3,
  src:"image1",
},
]

  return (
    <div className=' w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-fulll h-full'>
        <div className=' pb-8'>
          <p className='text-2xl font-bold inline  border-b-4 border-orange-500'>Portfolio</p>
          <p className=' py-6'>Check out my work</p>
        </div>
       
        <div className='grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0'>

          {
            pro.map(({id, src})=>(

              <div className=' shadow-md shadow-gray-600 rounded-lg'>
            <img src={image1} alt=""  className=' m-auto rounded-md duration-200 hover:scale-105'/>
           
            <div className=' flex justify-center items-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>code</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>demo</button>
            </div>
          </div>
            ))
          }

          
        </div>
      </div>
      <Navbar className='  mt-3'/>
    </div>
  )}
export default Projects


