import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'

const Landing = styled.section`
    min-height: 100vh;
    padding: 0rem 5rem;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Background = styled.div`
    background: linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%);
    background-attachment: fixed;
    padding: 0rem 5rem;
    position: absolute;
    height: 100%;
    min-height: 100vh;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 10vh;
`;

const NavLinks = styled.div`
    display: flex;
    list-style: none;
    font-size: 1.2rem;
`;

const BigText = styled.div`
    color: white;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -35%);
    font-size: 5rem;
    font-family: "Abel", sans-serif;
    margin: 0 0 20px 0;
    padding: 0 0 1rem 0;
`;

const Button = styled.div`
    border: 2px solid #fff;
    box-sizing: inherit;
    cursor: pointer;
    display: inline-block;
    font-size: 13pt;
    padding: 10px 20px;
    position: relative;
    transition: all 0.5s;
    padding: 12px 20px 12px 30px;
    margin-button: 53px;
    font-size: 1rem;
    font-family: "Abel", sans-serif;
    color: white;
`;

const Asdf = styled.div`
`;

//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
//const useMountEffect = (fun) => useEffect(fun, []);

export default function FrontPage() {
    const myRef = useRef(null);
    //useMountEffect(() => scrollToRef(myRef))

    const scrollToBottom = () => {
        myRef.current.scrollIntoView({ behavior: "smooth"})
    }

    return (
        <div>
            <style>
                @import url("https://fonts.googleapis.com/css?family=Abel");
            </style>

            <Background>
                <Particles params = {particle_parameter}/>
            </Background>
            
            <Landing>
                {/*
                <Nav>
                    <h1 id="logo">Afloat</h1>
                    <NavLinks>
                        <li style = {{paddingLeft: "5rem",}}>Home</li>
                        <li style = {{paddingLeft: "5rem"}}>Contact</li>
                        <li style = {{paddingLeft: "5rem"}}>About</li>
                    </NavLinks>
                </Nav>
                */}
                <BigText>Hello, I'm <span style= {{color: "lightblue", fontFamily:"Abel"}}>Nathan Ngoy</span>.</BigText>
                <Button onClick={scrollToBottom}>View my projects</Button>
                
            </Landing>

            <div ref={myRef}></div>
        </div>
    )
}

const particle_parameter = {
    "particles": {
        "number": {
            "value": 70
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
        }
    }
}