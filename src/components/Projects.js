import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import { TimelineLite } from "gsap/all";
import { findByLabelText } from '@testing-library/react';

const ProjectPage = styled.div`
    background: linear-gradient(135deg, rgb(194, 194, 194) 0%, rgb(194, 194, 194) 100%);
    min-height: 100vh;
    background-size: cover;
    right: 0;
    padding: 40px 0 0 0 ;
`;

const ProjectContent = styled.div`
    margin: 20px 0;
    padding: 0;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const Card = styled.div`
    display: inline-block;
    position: relative;
    width: 390px;
    height: 300px;
    max-width: 100%;
    background: white;
`;

const CardText = styled.div`
    color: #1b242f;
    text-align: center;
    transition: all 0.3s ease-in-out;
    z-index: 2;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    display: block;
    width: 390px;
    height: 300px;
    background-size: cover;
`;

const imageStyle = {
    height: '300px',
    width: '390px',
    backgroundSize: "cover",
}

export default function Projects() {
    const [showBox, setshowBox] = useState(false)

    const mouseOver = () => {
        setshowBox(showBox = true)
    }

    const mouseOut = () => {
        setshowBox(showBox = false)
    }

    return (
        <ProjectPage>
            <h1 className="aboutMe" style={{ color:"black", display: "block", fontFamily: "Abel", opacity: 0,fontSize: "3rem", textAlign: "center", transform: 'translateY(100%)'}}>Projects</h1>

            <ProjectContent>
                <Card>
                    <div className="picture">
                        <img style={imageStyle} src={require("../images/boardGame.JPG")}/>
                        <div className="title">BoardGame Together</div>
                        <div className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img style={imageStyle} src={require("../images/smartRockets.JPG")}/>
                        <div className="title">SmartRockets</div>
                        <div className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                <div className="picture">
                        <img style={imageStyle} src={require("../images/socialBook.JPG")}/>
                        <div className="title">SocialBook</div>
                        <div className="button">Learn More</div>
                    </div>
                </Card>
            </ProjectContent>
        </ProjectPage>
    )
}
