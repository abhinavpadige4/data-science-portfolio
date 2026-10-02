import React from 'react';
import './css/main.css';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
