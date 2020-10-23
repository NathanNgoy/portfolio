import React, { Component, useState, useEffect} from 'react'
import styled from 'styled-components'
import { TimelineLite } from "gsap/all";

const IntroBG = styled.div`
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IntroText = styled.div`
    color: rgb(233, 233, 233);
    font-family: "Abel", sans-serif;
    font-size: 3rem;
`;

const Hide = styled.h1`
    background: black;
    overflow: hidden;
`;

const HideSpan = styled.span`
    transform: translateY(100%),
    display: inline-block
`;

const Slider = styled.div`
    background: rgb(96, 108, 136);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%)
`;

export default function Intro()  {
    const [Tl, setTl] = useState(new TimelineLite({defaults: {ease: "power1.out"}}));
    let slideTarget = null;
    let introBGTarget = null;

    /*
    useEffect(() => {
        Tl.to('.text', {y: "0%", duration: 1, stagger: 0.25});
        Tl.to(slideTarget, {y: "-100%", duration: 1.5, delay: 0.5});
        Tl.to(introBGTarget, {y: "-100%", duration: 1}, "-=1");
    }, [])
    */

    return (
        <div>
            {/* 
            <IntroBG ref = {e => introBGTarget = e}>
                <IntroText>
                    <Hide>
                        <span className="text" style={{display: 'inline-block', transform: 'translateY(100%)'}}>Welcome</span>
                    </Hide>
                    <Hide>
                        <span className="text" style={{display: 'inline-block', transform: 'translateY(100%)'}}>To My</span>
                    </Hide>
                    <Hide>
                        <span className="text"style={{display: 'inline-block', transform: 'translateY(100%)'}}>Portfolio</span>
                    </Hide>
                </IntroText>
            </IntroBG>

            <Slider ref={e => slideTarget = e}></Slider>
            */}
        </div>
    )
}
