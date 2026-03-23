import React from 'react'
import resume from '../assets/resume.png'
const Resume = () => {
  return (
    <div>
        <section id='resume' className='flex bg-blue-950 flex-col md:flex-row'>
            <div className='md:w-1/2 flex justify-center py-10'>
                <img className='w-[300px] h-[300px] ' src={resume}/>
            </div>
            <div className='md:w-1/2 flex  justify-center'>
                <div className='flex flex-col justify-center p-5'>
                    <h1 className='text-4xl text-white border-b-2 border-primary mb-5 w-[130px] font-bold'>Resume</h1>
                    <p className='text-1xl text-white pb-5'>You can view my resume 
                    <a className='bttn' href='/resume.pdf' download>Download</a>
                    </p>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default Resume