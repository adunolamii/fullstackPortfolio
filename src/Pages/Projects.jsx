import React from 'react'
import Navbar from '../Components/Navbar'
import image1 from "../Components/event.png"
import image2 from "../Components/real estate.jpg"
import image3 from "../Components/movie.png"
import image4 from "../Components/country.jpg"
import { PageTransition } from '../Components/PageTransition'

function Projects() {
const projects =[
  {
  id:1,
  src:"image1",
},

//   {
//   id:2,
//   src:"image2",
// },

//   {
//   id:3,
//   src:"image3",
// },
// {
//   id:4,
//   src:"image4",
// },

]

  return (
    <PageTransition>
    <div className=' w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white md:h-screen top-0'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-fulll h-full top-0'>
        <div className=' top-0'>
          <p className=' py-0 text-2xl font-bold inline  border-b-4 border-y-pink-500 top-0'>Portfolio</p>
          <p className='top-0 py-2'>Check out some of my Projects right here.</p>
        </div>
       
        <div className='top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0'>

          {
           projects.map(({id, src})=>(

              <div key={id} className='top-0 shadow-md shadow-gray-600 rounded-lg'>
                    <img src={image1} alt=""  className='  top-0 m-auto rounded-md duration-200 hover:scale-105'/>
                   <div className='top-0 flex justify-center items-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Link</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>demo</button>
                 </div>
              </div>
           
            ))}
         
        </div>

        <div className='top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0'>

{
 projects.map(({id, src})=>(

    <div key={id} className='top-0 shadow-md shadow-gray-600 rounded-lg'>
          <img src={image2} alt=""  className=' m-auto rounded-md duration-200 hover:scale-105'/>
         <div className='top-0 flex justify-center items-center'>
          <button className='top-0 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Link</button>
          <button className='top-0 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>demo</button>
       </div>
    </div>
 
  ))}

</div>
  </div>

  <div className='top-0 grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0'>

{
 projects.map(({id, src})=>(

    <div key={id} className='top-0 shadow-md shadow-gray-600 rounded-lg'>
          <img src={image3} alt=""  className='top-0 m-auto rounded-md duration-200 hover:scale-105'/>
         <div className='top-0 flex justify-center items-center'>
          <button className='top-0 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Link</button>
          <button className='top-0 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>demo</button>
       </div>
    </div>
 
  ))}

<div className='grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0'>

{
 projects.map(({id, src})=>(

    <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
          <img src={image4} alt=""  className=' m-auto rounded-md duration-200 hover:scale-105'/>
         <div className=' flex justify-center items-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Link</button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>demo</button>
       </div>
    </div>
 
  ))}

</div>

</div>
<Navbar className=' static'/>
    </div>
   
    </PageTransition>
  )}
export default Projects


