import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const InfoBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    opactiy: 0.7;
    
    position: fixed;
    z-index: 100;


    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
`;

const InfoContent = styled.div`
    max-width: 700px;
    height: initial;
    top: -6vh;
    background-color: white;
    border-radius: 4px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    text-align: left;
    transition: all 0.3s;
    align-items: flex-start;
`;

const TextBox = styled.div`
    padding: 35px 60px 60px 25px;
    border-top: 3px solid black;
    box-sizing: border-box;
    color: white;
`;

const imageStyles = {
    height: '450px',
    width: '700px',
    position: 'relative',
    display: 'block'
}


export class Infobox extends Component {
    handleClick = () => {
        this.props.toggle()
    }

    render() {
        return (
            <InfoBackground>
                <InfoContent>
                    <img style={imageStyles} src={require("../images/socialBook.JPG")}/>
                    <TextBox>
                        <div className="infotitle">SocialBook</div>
                        <div className="infotag">Minimalistic Social Network</div>
                        <div className="infodetail">SocialBook is a miniamlistic inspired social media website with the goal to streamline communicatin and connecting with friends.</div>
                    </TextBox>
                    <div onClick={e => this.handleClick()} className="exit">x</div>
                </InfoContent>
            </InfoBackground>
        )
    }
}

export default Infobox

Infobox.propTypes = {
    children: PropTypes.element.isRequired,
};