import React from 'react'
import hero from '../assets/hero.png'
import { AiOutlineLinkedin ,AiOutlineGithub ,AiOutlineTwitter} from "react-icons/ai";
const Hero = () => {
  return (
    <div>
        <section className='flex flex-col md:flex-row px-3 py-28 bg-blue-700 justify-center h-full'>
            <div className="md:w-1/2 flex flex-col">
                <h1 className=' text-white text-6xl font-hero'>Hi, <br /> Iam Jothika
                <p className='text-2xl pt-4'>Iam a Full-Stack Developer</p></h1>
                <div className='flex py-10 gap-3 '>
                    <a href='' className='hover:text-white'><AiOutlineLinkedin size={30}/></a>
                    <a href='' className='hover:text-white'><AiOutlineGithub size={30}/></a>
                    <a href='' className='hover:text-white'><AiOutlineTwitter size={30}/></a>
               </div>
            </div>
            <img className='md:w-1/3 ' src={hero}></img>
        </section>
    </div>
  )
}

export default Hero