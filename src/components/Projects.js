import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

const ProjectPage = styled.div`
    background: #DCDCDC;
    min-height: 100vh;
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

export default function Projects(props) {
    const [showBox, setshowBox] = useState(false)
    
    return (
        <ProjectPage>
            {/*<h1 className="aboutMe" style={{ color:"black", display: "block", fontFamily: "Abel", opacity: 0,fontSize: "3rem", textAlign: "center", transform: 'translateY(100%)'}}>Software Projects</h1>*/}
            <h1 className="aboutMe" style={{ color:"black", display: "block", fontFamily: "Abel",fontSize: "3rem", textAlign: "center"}}>Software Projects</h1>

            <ProjectContent>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/socialBook.JPG")}/>
                        <div className="title">SocialBook</div>
                        <div className="highlight">NodeJS/ BootStrap</div>
                        <div onClick={() => {props.toggle(); props.setNewID(0)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/boardGame.JPG")}/>
                        <div className="title">BoardGame Together</div>
                        <div className="highlight-white">NodeJS/ BootStrap</div>
                        <div onClick={() => {props.toggle(); props.setNewID(1)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/smartRockets.JPG")}/>
                        <div className="title">SmartRockets</div>
                        <div className="highlight-white">Python</div>
                        <div onClick={() => {props.toggle(); props.setNewID(2)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/bearMaps.JPG")}/>
                        <div className="title">Bear Maps</div>
                        <div className="highlight">Java</div>
                        <div onClick={() => {props.toggle(); props.setNewID(3)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/randomMap.JPG")}/>
                        <div className="title">Battle of Hugs</div>
                        <div className="highlight-white">Java</div>
                        <div onClick={() => {props.toggle(); props.setNewID(4)}} className="button">Learn More</div>
                        {/*https://www.youtube.com/watch?v=IWQrxD5S09E */}
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/membersOnly.JPG")}/>
                        <div className="title">Members Only</div>
                        <div className="highlight">NodeJS/ BootStrap</div>
                        <div onClick={() => {props.toggle(); props.setNewID(5)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/todo.JPG")}/>
                        <div className="title">ToDo List</div>
                        <div className="highlight">ReactJS</div>
                        <div onClick={() => {props.toggle(); props.setNewID(6)}} className="button">Learn More</div>
                    </div>
                </Card>
                <Card>
                    <div className="picture">
                        <img className="display" style={imageStyle} src={require("../images/localLibrary.JPG")}/>
                        <div className="title">Library Inventory</div>
                        <div className="highlight">NodeJS</div>
                        <div onClick={() => {props.toggle(); props.setNewID(7)}} className="button">Learn More</div>
                    </div>
                </Card>
            </ProjectContent>
        </ProjectPage>
    )
}
