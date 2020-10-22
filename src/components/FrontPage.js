import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'

const Landing = styled.section`
    min-height: 100vh;
    padding: 0rem 5rem;
`;

const Background = styled.div`
    background: linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%);
    min-height: 100vh;
    background-size: cover;
    padding: 0rem 5rem;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
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
`;

export default function FrontPage() {
    return (
        <div>
            <Background>
                <Particles params = {particle_parameter}/>
            </Background>
            
            <Landing>
                <Nav>
                    <h1 id="logo">Afloat</h1>
                    <NavLinks>
                        <li style = {{paddingLeft: "5rem"}}>Home</li>
                        <li style = {{paddingLeft: "5rem"}}>Contact</li>
                        <li style = {{paddingLeft: "5rem"}}>About</li>
                    </NavLinks>
                </Nav>
                <BigText>Hello, I'm <span style= {{color: "lightblue"}}>Nathan Ngoy</span>.</BigText>
            </Landing>
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