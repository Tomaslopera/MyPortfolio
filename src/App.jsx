import React from 'react';
import './styles/App.css';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
