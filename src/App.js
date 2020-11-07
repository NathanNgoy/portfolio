import React, {Component, useState} from 'react';
import FrontPage from './components/FrontPage'
import Intro from './components/Intro'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import MechProjects from './components/MechProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InfoBox from './components/Infobox'

export default class App extends Component {
  state = {
    seen: false,
    id: 0
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    })
    console.log(this.state.seen)
  }

  setID = (newid) => {
    this.setState({
      id: newid
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.seen ? <InfoBox toggle={this.togglePop} index={this.state.id}/> : null}
        <FrontPage />
        <Intro />
        <Aboutme />
        <Projects toggle={this.togglePop} setNewID = {this.setID}/>
        <Footer />
      </div>
    );
  }
}