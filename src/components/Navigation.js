import React, { useState } from 'react';
import { Li, A } from './style.js';
import { Link } from 'react-router-dom'

function Navigation() {

    const [home, setHome] = useState(true);
    const [skill, setSkill] = useState(false);
    const [about, setAbout] = useState(false);

    const linkStyle = {
        textDecoration: 'none',
        color: '#0D3843'
    };

    return (<nav className="navbar navbar-expand">
        <ul className="navbar-nav mr-auto">
            <Li active={home} className="nav-item px-2">
                <A className="nav-link" onClick={(e) => {setHome(true); setSkill(false); setAbout(false); e.preventDefault()}}>
                    <Link to="/" style={linkStyle}>HOME</Link>
                </A>
            </Li>
            <Li active={skill} className="nav-item px-2">
                <A className="nav-link" onClick={(e) => {setHome(false); setSkill(true); setAbout(false); e.preventDefault()}}>
                    <Link to="/skills" style={linkStyle}>SKILLS</Link>
                </A>
            </Li>
            <Li active={about} className="nav-item px-2">
                <A className="nav-link" onClick={(e) => {setHome(false); setSkill(false); setAbout(true); e.preventDefault()}}>
                    <Link to="/about" style={linkStyle}>ABOUT</Link>
                </A>
            </Li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <A className="nav-link">
                    <Link to="/projects" style={linkStyle}>PROJECTS</Link>
                </A>
            </li>
        </ul>
    </nav>);
}

export default Navigation;