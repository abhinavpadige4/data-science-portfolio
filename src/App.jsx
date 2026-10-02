import React from 'react';
import './css/main.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

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
