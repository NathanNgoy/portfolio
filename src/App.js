import React from 'react';
import './App.css';
import FrontPage from './components/FrontPage'
import Intro from './components/Intro'
import Particles from 'react-particles-js'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <FrontPage />
      <Intro />
    </div>
  );
}

export default App;
