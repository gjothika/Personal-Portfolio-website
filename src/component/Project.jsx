import React from 'react'
import loan from '../assets/loan.png'
import ecommerce from '../assets/e-commerce.png'
import restaurant from '../assets/restaurant.png'
import todo from '../assets/todo.png'
import weather from '../assets/weather.png'
import milky from '../assets/milky.png'

const Project  = () => {
  return (
    <section id='project' className='bg-blue-700 py-10 px-4 md:px-20'>
      <div className='text-center text-white mb-10'>
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>Projects</h1>
        <p className='text-sm md:text-base px-2 md:px-20'>Here are some of the web applications I have developed using React, JavaScript, and modern UI technologies, focusing on responsive design and user experience.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4'>
        <div className='relative group'>
          <img className='w-full h-[220px] object-cover rounded-lg' src={restaurant} />
          <div className='project-design group-hover:opacity-100 rounded-lg'>
            <p className='text-center'>Designed and developed a responsive restaurant website using HTML & CSS. </p>
          </div>
        </div>
        <div className='relative group'>
          <img className='w-full h-[220px] object-cover rounded-lg' src={todo} />
          <div className='project-design group-hover:opacity-100 rounded-lg'>
            <p className='text-center'>Developed a simple To-Do application using React to manage daily tasks with add and delete functionality.</p>
          </div>
        </div>
        <div className='relative group'>
          <img className='w-full h-[220px] object-cover rounded-lg' src={weather}/>
          <div className='project-design group-hover:opacity-100 rounded-lg'>
            <p className='text-center'> Developed a weather app using React with real-time data.</p>
          </div>
        </div>
      </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='relative group'>
          <img className='w-full h-[220px] object-cover rounded-lg' src={ecommerce} />
          <div className='project-design group-hover:opacity-100 rounded-lg'>
            <p className='text-center'>Developed a responsive e-commerce web application using React with API integration for product listing, cart, and order management.</p>
          </div>
        </div>
        <div className='relative group'>
          <img className='w-full h-[220px] object-cover rounded-lg' src={loan} />
          <div className='project-design group-hover:opacity-100 rounded-lg'>
            <p className='text-center'>Developed a loan management application with secure login and MySQL.</p>
          </div>
        </div>
        <div className='relative group'>
          <img className='w-full h-[220px] object-cover rounded-lg' src={milky}/>
          <div className='project-design group-hover:opacity-100 rounded-lg'>
            <p className='text-center'>Developed a responsive Milkymist product website using React to showcase products and user-friendly UI.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project