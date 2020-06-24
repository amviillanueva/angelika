import React from 'react';
import styled from 'styled-components';

const Li = styled.li `
    border-bottom: ${props => props.active ? "4px solid rgb(76, 167, 188, 50%)" : "4px solid rgb(76, 167, 188, 100%)"};
`
const A = styled.a `
    color: #0D3843;
    font-family: 'Montserrat', sans-serif;
    opacity: 1;
    &:hover {
        color: #0D3843;
        opacity: .7; 
    }
`

function Navigation() {
    return (<nav className="navbar navbar-expand m-5">
        <ul className="navbar-nav mr-auto">
            <Li active className="nav-item px-2">
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