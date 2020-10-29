import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import { TimelineLite } from "gsap/all";
import { findByLabelText } from '@testing-library/react';

const AboutPage = styled.div`
    background: white;
    background-size: cover;
    right: 0;
    height: 80vh;
    padding: 40px 0 0 0 ;
    display: block;
`;

const AboutContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: start;
`;

const imageStyle = {
    height: '500px',
    padding: '0 50px 0 50px'
}

const TextBox = styled.div`
    font-family: "Abel", sans-serif;
    max-width: 40%;
    justify-content: center;
`;

export default function Aboutme() {
    const [Tl, setTl] = useState(new TimelineLite({defaults: {ease: "power1.out"}}));

    useEffect(() => {
        Tl.to('.aboutMe', {y: "0%", duration: 1.5, stagger: 0.25, opacity: 1});
    }, [])

    /*
    componentDidMount() {
        var h1 = parseInt(this.refs.header.offsetHeight);
        window.addEventListener('scroll', this._calcScroll.bind(this, h1));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this._calcScroll)
    }
    
    const val = (h1) => {
        var _window = window;
        var heightDiff = parseInt(h1);
        var scrollPos = _window.scrollY;
        if (scrollPos > heightDiff) {
            Tl.to('.aboutMe', {y: "0%", duration: 1.5, stagger: 0.25, opacity: 1});
        } 
    }
    */

    return (
        <div>
            <style>
                @import url("https://fonts.googleapis.com/css?family=Abel");
            </style>

            <AboutPage>
                <h1 className="aboutMe" style={{ color:"black", display: "block", fontFamily: "Abel", opacity: 0,fontSize: "3rem", textAlign: "center", transform: 'translateY(100%)'}}>About Me</h1>
                
                <AboutContent>
                    <img style = {imageStyle} src={require("../images/aboutPicture.jpg")}/>
                    <TextBox>
                        <h1 style={{color: "rgb(96, 108, 136)"}}>Nathan Ngoy</h1>
                        <h2 style={{color: "lightblue"}}>UC Berkeley 2019 || B.S. Mechanical Engineer</h2>
                        <p>Hello, I'm Nathan Ngoy. I'm a recent Mechanical Engineer graduate who decide to make the switch to Software Development. 
                            For most of my time in undergraduate, I've found myself enjoying the coding sections of my engineering projects more and found programming engaging and fun. UC Berkeley CS61B also peeked my interest
                            to the field of programming which ultimately led to me partaking this journey.</p>
                        <p>I have been self teaching myself programming and website development for the past 6 months with the help of the Odin Project. I've made multiple projects, ranging from fullstack websites 
                            to incorporating evolutionary algorithm into a PyGame. I've  read The Algorithm Design Manual to review my Data Structures knowledge. Check out my software projects (and my engineering projects) below, thanks for visiting!</p>

                        <p>Email: nngoy@berkeley.edu</p>
                    </TextBox>
                    
                </AboutContent>

            
            </AboutPage>

        </div>
    )
}
