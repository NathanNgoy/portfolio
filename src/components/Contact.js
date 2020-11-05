import React from 'react'
import styled from 'styled-components'

const ContactPage = styled.div`
    background: linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%);
    min-height: 50vh;
    background-size: cover;
    right: 0;
    padding: 30px 0 0 0 ;
`;

export default function Contact() {
    return (
        <ContactPage>
            {/*<h1 className="aboutMe" style={{ color:"white", display: "block", fontFamily: "Abel", opacity: 0,fontSize: "3rem", textAlign: "center", transform: 'translateY(100%)'}}>Contact</h1>*/}
            <h1 className="aboutMe" style={{ color:"white", display: "block", fontFamily: "Abel", opacity: 1,fontSize: "3rem", textAlign: "center"}}>Contact</h1>
        </ContactPage>
    )
}
