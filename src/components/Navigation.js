import React, { useState } from 'react';
import { Li, A } from './style.js';

function Navigation() {

    const [home, setHome] = useState(true);
    const [skill, setSkill] = useState(false);
    const [about, setAbout] = useState(false);

    return (<nav className="navbar navbar-expand m-5">
        <ul className="navbar-nav mr-auto">
            <Li active={home} className="nav-item px-2">
                <A className="nav-link" href="" onClick={(e) => {setHome(true); setSkill(false); setAbout(false); e.preventDefault()}}>HOME</A>
            </Li>
            <Li active={skill} className="nav-item px-2">
                <A className="nav-link" href="Skills.js" onClick={(e) => {setHome(false); setSkill(true); setAbout(false); e.preventDefault()}}>SKILLS</A>
            </Li>
            <Li active={about} className="nav-item px-2">
                <A className="nav-link" href="" onClick={(e) => {setHome(false); setSkill(false); setAbout(true); e.preventDefault()}}>ABOUT</A>
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