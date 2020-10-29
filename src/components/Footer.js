import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';

const FooterPage = styled.div`
    background: linear-gradient(135deg, rgb(41, 53, 81 ) 0%, rgb(41, 53, 81 ) 100%);
    min-height: 10vh;
    background-size: cover;
    padding: 70px 0 50px 0;
    position: relative;
    display: block
`;

const FootNote = styled.div`
    font-size: 10pt;
    margin-top: 35px;
    text-align: center;
    color: rgb(194, 194, 194);
`;

const IconsFrame = styled.div`
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const Icon = styled.div`
    cursor: pointer;
    height: 55px;
    margin: 0 20px;
    position: relative;
    text-align: center;
    width: 55px;
    background: rgb(96, 108, 136);
`;

const Padding = styled.div`
    height: 55px;
    position: relative;
    width: 30px;
`;

export default function Footer() {
    return (
        <FooterPage>
            <IconsFrame> 
                <SocialIcon url="https://www.linkedin.com/in/nathanngoy/" fgColor="white"/>
                <Padding></Padding>
                <SocialIcon url="https://github.com/NathanNgoy" fgColor="white"/>
                <Padding></Padding>
                <SocialIcon url="https://drive.google.com/file/d/1PmEs6GQ2kQyRnY-JwuolcAe-b68uDxdf/view?usp=sharing"fgColor="white"/>
                <Padding></Padding>
                <SocialIcon url="https://www.instagram.com/" fgColor="white"/>
            </IconsFrame>
            <FootNote>Nathan Ngoy © 2020 </FootNote>
        </FooterPage>
    )
}
