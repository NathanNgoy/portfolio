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

`;

export default function Projects() {
    return (
        <ProjectPage>
            <h1 className="aboutMe" style={{ color:"black", display: "block", fontFamily: "Abel", opacity: 0,fontSize: "3rem", textAlign: "center", transform: 'translateY(100%)'}}>Projects</h1>

            <ProjectContent>
                <Card>
                    <CardText>Hello there</CardText>
                </Card>
                <Card>
                    <CardText>Hello there</CardText>
                </Card>
                <Card>
                    <CardText>Hello there</CardText>
                </Card>
            </ProjectContent>
        </ProjectPage>
    )
}
