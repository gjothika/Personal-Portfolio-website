import React from 'react'
import about from '../assets/aboutme.png'
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
                    <p className='text-1xl text-white pb-5'>I am Jothika, a passionate web developer with hands-on experience in building responsive web applications using React.js. I have strong knowledge of HTML, CSS, Bootstrap, and Tailwind CSS.</p>
                    <p className='text-white text-1xl pb-5'>I have developed real-world projects including an e-commerce web application, where I implemented frontend using React and integrated backend APIs using Node.js and Express. I am familiar with API calls, state management, and creating user-friendly interfaces.</p>
                    <p className='text-white text-1xl'>I am continuously learning new technologies and improving my skills to build modern and efficient web applications. I am a quick learner who enjoys solving problems and building practical projects. My goal is to grow as a professional developer and contribute to innovative and impactful solutions.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About