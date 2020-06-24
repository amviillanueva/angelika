import React from 'react';
import styled from 'styled-components';

const Li = styled.li `
    border-bottom: 4px solid #4CA7BC;
`
const A = styled.a `
    color: #0D3843;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        color: #0D3843;
        opacity: .7; 
    }
`

function Navigation() {
    return (<nav className="navbar navbar-expand m-5">
        <ul className="navbar-nav mr-auto">
            <Li className="nav-item px-2">
                <A className="nav-link" href="Home.js">HOME</A>
            </Li>
            <Li className="nav-item px-2">
                <A className="nav-link" href="Home.js">SKILLS</A>
            </Li>
            <Li className="nav-item px-2">
                <A className="nav-link" href="Home.js">ABOUT</A>
            </Li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <A className="nav-link" href="Home.js">PROJECTS</A>
            </li>
        </ul>
    </nav>);
}

export default Navigation;