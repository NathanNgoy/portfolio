import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const images = [
    require("../images/socialBook.JPG"),
    require("../images/boardGame.JPG"),
    require("../images/smartRockets.JPG"),
    require("../images/bearMaps.JPG"),
    require("../images/randomMap.JPG"),
    require("../images/membersOnly.JPG"),
    require("../images/todo.JPG"),
    require("../images/localLibrary.JPG")
];

const titles = [
    "SocialBook",
    "BoardGame Together",
    "SmartRockets",
    "Bear Maps",
    "Battle of Hugs",
    "Members Only",
    "ToDo List",
    "Local Library Inventory"
];

const tags = [
    "Minimalistic Social Network",
    "BoardGame Online Store",
    "Evoluntionary Pathing Rockets",
    "Web Mapping API of Berkeley",
    "Map Generator for Maze Game",
    "Exclusive Clubhouse",
    "Tracking Tasks with ReactJS",
    "Library Inventory Website"
]

const details = [
    "SocialBook is a miniamlistic inspired social media platform with the goal to streamline communicating and connecting with friends. The website allows users to create posts and comments, react to posts in their timeline, and search for new friends",
    "BoardGame Online is a full stack website that display board games for sale. The website allows for CRUD functionality for owner of the store that allow the owner to keep track of boardgame inventory and add, edit, and delete boardgames.",
    "SmartRockets is a program that utilizes evolutionary algorithm to help guide rockets closer to the desired target with each new generation. Users are able to interact with the program by placing obstacles for the rockets to circumvent",
    "BearMaps is a web mapping application of Berkeley that uses real-world mapping data to power the backend of the application. Functionality of this API includes: Map Rastering (given coordinates - display appropriate map), Zooming and Scrolling, " +  
    "Routing (street direction and using A* algorithm to optimize routes), Location Pins (finding all locations that matches string). Due to UC Berkeley academic policy, I am unable to post the github link; however information of the project can be found here: https://sp18.datastructur.es/materials/proj/proj3/proj3",
    "Battle of Hugs is a tile based game inspired by UC Berkeley CS Professor Hugs. Given a seed, the map will randomly generate a tile based maze that the user will then be able to transverse and complete tasks. Due to UC Berkeley academic policy, I am unable to post the github link; however video of the compelted project can be found here: https://www.youtube.com/watch?v=IWQrxD5S09E",
    "Members Only is an 'exclusive clubhouse' where members can write posts about other members or nonmembers. However, only members can see the author of the post while outside can only see the story and wonder who wrote it. The blogging website was my first introduction to incorporating a backend authentication and cookie system for signup and login.",
    "ToDo List is a task manager API where user is able to write down tasks, mark tasks as complete, and delete tasks. ToDo List was my first introduction to ReactJS and using ReactJS to complete a project.",
    "Local Library Inventory is an inventory tracking website that allows for CRUD functionality to keep track of library books. Users are able to add, edit, or delete books, authors, and genres."
]

export class Infobox extends Component {

    handleClick = () => {
        this.props.toggle()
    }

    render() {
        return (
            <InfoBackground>
                <InfoContent>
                    <img style={imageStyles} src={images[this.props.index]}/>
                    <TextBox>
                        <div className="infotitle">{titles[this.props.index]}</div>
                        <div className="infotag">{tags[this.props.index]}</div>
                        <div className="infodetail">{details[this.props.index]}</div>
                    </TextBox>
                    <div onClick={e => this.handleClick()} className="exit">x</div>
                </InfoContent>
            </InfoBackground>
        )
    }
}



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

export default Infobox
