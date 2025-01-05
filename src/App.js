import React, { useRef } from 'react';
import photo from './assets/photo.jpg';
import { Typewriter } from 'react-simple-typewriter';
import './App.css';
import Skill from './skill';
import Intern from './inten';
import Project from './project';
import Contact from './contact';

function App() {
  const skillRef = useRef(null);
  const internRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span style={{ color: 'Teal' }}>VR</span> Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection(skillRef)}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection(internRef)}
                >
                  Internship
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection(projectRef)}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection(contactRef)}
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection(contactRef)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="grid-container">
        <div className="text-content">
          <h1 id="name">
            Hi, I am <br />
            Vinothini R
          </h1>
          <h2 id="dev">
            I am a{' '}
            <Typewriter
              words={['Front End Developer', 'React Developer', 'Angular Developer']}
              loop={true}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p id="about">
            A skilled React developer with a strong portfolio,<br />
            passionate about staying updated on frontend tech.<br />
            Collaborative and committed to quality, you thrive in <br /> dynamic teams.
            Eager to contribute creativity and <br /> bring innovative ideas to life.
          </p>
          <a
            id="btn"
            href="/vinothini.pdf"
            target="_blank"
            className="text-decoration-none"
            rel="noopener noreferrer"
          >
            Check Resume
          </a>
        </div>
        <div className="image-container">
          <img id="photo" src={photo} alt="Vinothini R" />
        </div>
      </div>

      {/* Sections */}
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={internRef}>
        <Intern />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
