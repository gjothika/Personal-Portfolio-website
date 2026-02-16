import React from 'react'
import about from '../assets/about.png'
const About = () => {
  return (
    <div>
        <section id='about' className='flex bg-blue-950 flex-col md:flex-row  '>
            <div className='md:w-1/2 flex justify-center py-14 '>
                <img className='w-[400px] h-[400px]' src={about}/>
            </div>
            <div className='md:w-1/2 flex  justify-center'>
                <div className='flex flex-col justify-center p-5'>
                    <h1 className='text-4xl text-white border-b-2 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='text-1xl text-white pb-5'>I am Jothika, a passionate beginner web developer currently working on React projects. I have knowledge of HTML, CSS, and Tailwind CSS, and I enjoy creating responsive and user-friendly web applications.</p>
                    <p className='text-white text-1xl pb-5'>I am continuously learning new technologies and improving my skills in front-end development to build modern and efficient websites.</p>
                    <p className='text-white text-1xl'>I am a quick learner who is always eager to explore new technologies and enhance my front-end development skills. I continuously practice by building projects and learning from real-world examples. My goal is to grow as a professional developer and contribute to innovative and impactful web applications.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About