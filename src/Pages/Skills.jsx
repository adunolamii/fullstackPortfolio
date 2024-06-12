import React from 'react'
import Navbar from '../Components/Navbar'
import  image1  from "../Components/react2.png"
import  image2  from "../Components/javascript.png"
import  image3  from "../Components/tailwind.png"
import  image4  from "../Components/mongodb.png"
import  image5  from "../Components/github.png"
import  image6  from "../Components/node.png"

function Skills() {

  const techs =[
    {
      id: 1,
      src: image2,
      title: "JAVASCRIPT",
      style: "shadow-yellow-600"
    },

    {
      id: 2,
      src: image1,
      title: "REACT",
      style: "shadow-blue-700"
    },
    {
      id: 3,
      src: image3,
      title: "TAILWIND",
      style: "shadow-blue-900"
    },
    {
      id: 4,
      src: image6,
      title: "NODEJS",
      style: "shadow-green-500"
    },
    {
      id: 5,
      src: image4,
      title: "MONGODB",
      style: "shadow-green-500"
    },
    {
      id: 6,
      src: image5,
      title: "GITHUB",
      style: "shadow-black"
    }

  ]
  return (
    <div className=' w-full  bg-gradient-to-b from-black to-gray-800  text-white'> 
<div className='w-full grid grid-cols-2 gap-8 text-center py-2 px-12'> </div>
<p className=' text-2xl font-bold border-b-4 border-orange-400  inline'>Experiences</p>
{/* <p>These are the Technologies I have worked with.</p> */}


 <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
  
  
  {
    techs.map(({id, src, title, style})=>(
<div
key={id}
 className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
 >
    <img src={src} alt="" className=' w-20 mx-auto' />
    <p className='font-bold mt-4'>{title}</p>

</div>
    ))
  }

<Navbar className='px-4  '/>

  
 </div>




    
    
    </div>
    
   
  )
}

export default Skills