import type React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import Experiences from './components/Experiences'
const App: React.FC = () => {

  useEffect(() => {
    toast.success('Welcome to my portfolio! 🌟');
  }, [])

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />
      <Header />
      <Hero
        name="Shubham"
        role="Full Stack Developer"
        intro="I’m a passionate and results-driven Full Stack Developer with hands-on experience in designing, developing, and maintaining end-to-end web applications"
        imageSrc="/me.png"
        resumeLink=""
        githubLink="https://github.com/Shubham-async"
        linkedinLink="https://www.linkedin.com/in/shubham-tripathi-976544267"
        phoneNo="+91 9125547329"
        emailLink="mailto:shubhamtripathi1042@gmail.com"
      />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App