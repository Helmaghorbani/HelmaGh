import React, {useEffect} from 'react'
import './assets/script'
import './App.css'
import { motion } from 'framer-motion'



function App() {
  useEffect(() => {
      
    const scrollButton = document.querySelector('.scroll-down');
    if (scrollButton) {
      scrollButton.addEventListener('click', function() {
        
        document.querySelector('#about').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  }, []); 

  return (
    <>
      <nav className="navbar sticky">
        <div className="container">
          <div className="brand">HelmaGhorbani</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="home-section">
        <div className="home-container">
          <h1>CREATIVE <br /> EXCELLENCE</h1>
          <p>
            The art of visual communication is very impactful in the world around us, 
            design is meant to be connected.
          </p>
          <div className="scroll-down">
            <span>↓</span>
          </div>
        </div>
      </section>



      <section id="about" className="about-section">
  <div className="about-container">
  <motion.h2 
  initial={{ opacity: 0, y: 100 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1.5, ease: "easeOut" }}
>
  As a Front-End Developer, I create engaging web experiences 
  that connect creativity with functionality.
</motion.h2>
    
    <div className="about-divider"></div>

    <div className="about-content">
      <div className="about-left">
        <div className="about-box">
          <h3>Web Design</h3>
          <p>Crafting visually compelling and user-friendly websites that enhance engagement and usability.</p>
        </div>
      </div>

      <div className="about-divider-vertical"></div>

      <div className="about-right">
        <div className="about-box">
          <h3>3D Design</h3>
          <p>Creating realistic and interactive 3D models to elevate the digital experience.</p>
        </div>

        <a href="pdf/HelmaGhorbani-resume.pdf" download className="download-btn">Download Resume</a>
      </div>
    </div>
  </div>
</section>



<section id="skills" className="sectionnn">
  <h2>Skills</h2>
  <div className="skills-carousel">
    <div className="carousel-container">
      <div className="skill-box">React</div>
      <div className="skill-box">HTML</div>
      <div className="skill-box">CSS</div>
      <div className="skill-box">JavaScript</div>
      <div className="skill-box">GitHub</div>
    </div>
  </div>
</section>


<section id="projects" className="sectionnnn">
  <div className="projects-header">
    <motion.h2 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Work
    </motion.h2>
    
    <motion.p
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      className="projects-description"
    >
      Creativity is the paintbrush of the mind, coloring the world with imagination, innovation, and endless possibilities.
    </motion.p>
  </div>

  <div className="projects-container">
    <div className="project">
    <img src={`${import.meta.env.BASE_URL}photo/screenshot2.png`} alt="screenshot" />

      <h3>AllureShop</h3>
      <a href="https://helmaghorbani.github.io/AllureShop/" target="_blank">check this out</a>
    </div>
    <div className="project">
    <img src={`${import.meta.env.BASE_URL}photo/screenshot1.png`} alt="screenshot" />
      <h3>ASOS</h3>
      <a href="https://helmaghorbani.github.io/ASOS/" target="_blank">check this out</a>
    </div>
  </div>
</section>


      <section id="contact" className="sectio">
      <h2 className="footer-heading">Let's Discuss <br /> Your Ideas</h2>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=helmaghqorbani21@gmail.com" target="_blank" className="footer-button">Let's Talk !</a>
    </section>
    
    </>
  )
}

export default App
