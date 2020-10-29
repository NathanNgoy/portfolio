import React, {useState} from 'react';
import FrontPage from './components/FrontPage'
import Intro from './components/Intro'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="App">
      <FrontPage />
      <Intro />
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
