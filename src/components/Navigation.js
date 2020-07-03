import React, { useState } from 'react';
import { Theme, Nav, Li, A } from './style.js';
import { Link } from 'react-router-dom'

function Navigation() {

    const [home, setHome] = useState(true);
    const [skills, setSkills] = useState(false);
    const [about, setAbout] = useState(false);
    const [projects, setProjects] = useState(false);

    const linkStyle = {
        textDecoration: 'none',
        color: '#0D3843'
    };

    return (<Theme>
        <Nav className="navbar navbar-expand justify-content-center fixed-top">
            <ul className="navbar-nav">
                <Li active={home} className="nav-item p-md-2 p-1">
                    <A className="nav-link" onClick={(e) => {setHome(true); setSkills(false); setAbout(false); setProjects(false); e.preventDefault()}}>
                        <Link to="/angelika" style={linkStyle}>HOME</Link>
                    </A>
                </Li>
                <Li active={skills} className="nav-item p-md-2 p-1">
                    <A className="nav-link" onClick={(e) => {setHome(false); setSkills(true); setAbout(false); setProjects(false); e.preventDefault()}}>
                        <Link to="/skills" style={linkStyle}>SKILLS</Link>
                    </A>
                </Li>
                <Li active={about} className="nav-item p-md-2 p-1">
                    <A className="nav-link" onClick={(e) => {setHome(false); setSkills(false); setAbout(true); setProjects(false); e.preventDefault()}}>
                        <Link to="/about" style={linkStyle}>ABOUT</Link>
                    </A>
                </Li>
                <Li active={projects} className="nav-item ml-md-4 px-md-1 py-md-2 ml-2 py-1">
                    <A className="nav-link" onClick={(e) => {setHome(false); setSkills(false); setAbout(false); setProjects(true); e.preventDefault()}}>
                        <Link to="/projects" style={linkStyle}>PROJECTS</Link>
                    </A>
                </Li>
            </ul>
        </Nav>
    </Theme>);
}

export default Navigation;