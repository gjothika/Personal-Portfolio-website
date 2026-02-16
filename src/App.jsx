import React from 'react'
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Project from './component/Project'
import Resume from './component/Resume'
import Contact from './component/Contact'
import Footer from './component/Footer'
const App = () => {
  return (
    <div>
       <Header />
       <Hero />
       <About />
       <Project />
       <Resume />
       <Contact />
       <Footer />
    </div>
  )
}

export default App