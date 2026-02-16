import React from 'react'
import project from '../assets/project.png'
import projects from '../assets/projects.png'
import project1 from '../assets/project1.png'
const Project  = () => {
  return (
    <div>
       <section id='project' className='flex  flex-col justify-center bg-blue-700 py-10 px-10'>
        <div className='w-full pb-10'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-2 border-primary mb-5 w-[140px] font-bold mx-auto text-center'>Projects</h1>
            <p className='px-10'>These are my projects built using HTML, CSS, JavaScript, and React.js. I used Tailwind CSS for styling and created responsive, user-friendly web applications.</p>
        </div>
        </div>
        <div className='w-full '>
        <div className='flex md:flex-row flex-col px-20 gap-8 text-white '>
            <div className='relative'>
               <img  className='h-[210px] w-[340px]'src={projects}/>
               <div className='project-design'>
                  <p className='text-center'>Designed and developed a responsive restaurant website using HTML & CSS.</p>
               </div>
            </div>

            <div className='relative'>
            <img className='h-[210px] w-[340px]' src={project}/>
                <div className='project-design'>
                   <p className='text-center'>Developed a loan management application with secure login and MySQL data storage. </p>
                </div>
            </div>
            
            <div className='relative'>
            <img className='h-[210px] w-[340px]' src={project1}/>
                <div className='project-design'>
                   <p className='text-center'>Developed a weather application using React that shows real-time weather information with a responsive design.</p>
                </div>
            </div>

        </div>
        </div>
       </section>
    </div>
  )
}

export default Project