import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectPage = styled.div`
    background: linear-gradient(135deg, rgb(194, 194, 194) 0%, rgb(194, 194, 194) 100%);
    min-height: 75vh;
    background-size: cover;
    right: 0;
    padding: 40px 0 0 0 ;
`;

const ProjectContent = styled.div`
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    max-width: 1400px;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 10px;
`;

const Card = styled.div`
    display: inline-block;
    position: relative;
    height: 300px;
    max-width: 100%;
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
    height: 300px;
    background-size: cover;
`;

const imageStyle = {
    height: '300px',
    width: '390px',
    backgroundSize: "cover",
}

export default function MechProjects(props) {
    const [showBox, setshowBox] = useState(false)
    
    return (
        <ProjectPage>
            {/*<h1 className="aboutMe" style={{ color:"black", display: "block", fontFamily: "Abel", opacity: 0,fontSize: "3rem", textAlign: "center", transform: 'translateY(100%)'}}>Software Projects</h1>*/}
            <h1 className="aboutMe" style={{ color:"white", display: "block", fontFamily: "Abel",fontSize: "3rem", textAlign: "center"}}>Engineering Projects</h1>

            <ProjectContent>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/hand/cover.jpg")}/>
                        <div className="title">Merari's Hand</div>
                        <div className="highlight">Prosthetic Project</div>
                        <div onClick={() => {props.toggle(); props.setNewID(8)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/humm/cover.jpg")}/>
                        <div className="title">Humm</div>
                        <div className="highlight">Next Generation of Headbands</div>
                        <div onClick={() => {props.toggle(); props.setNewID(9)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/hyperloop/cover.jpg")}/>
                        <div className="title">Berkeley Hyperloop</div>
                        <div className="highlight-white">Transportation Technologies</div>
                        <div onClick={() => {props.toggle(); props.setNewID(10)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/suitcase/cover.jpg")}/>
                        <div className="title">Smart Suitcase</div>
                        <div className="highlight">Autonomously Driven Suitcase</div>
                        <div onClick={() => {props.toggle(); props.setNewID(11)}} className="button">Learn More</div>
                    </div>
                </Card>
            </ProjectContent>
        </ProjectPage>
    )
}
