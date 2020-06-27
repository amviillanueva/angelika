import React, { useState } from 'react';
import { Theme, Li, A } from './style.js';
import { Link } from 'react-router-dom'

function Navigation() {

    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [projects, setProjects] = useState(false);

    const linkStyle = {
        textDecoration: 'none',
        color: '#0D3843'
    };

    return (<Theme>
        <nav className="navbar navbar-expand justify-content-center">
            <ul className="navbar-nav">
                <Li active={home} className="nav-item p-2">
                    <A className="nav-link" onClick={(e) => {setHome(true); setAbout(false); setProjects(false); e.preventDefault()}}>
                        <Link to="/" style={linkStyle}>HOME</Link>
                    </A>
                </Li>
                <Li active={about} className="nav-item p-2">
                    <A className="nav-link" onClick={(e) => {setHome(false); setAbout(true); setProjects(false); e.preventDefault()}}>
                        <Link to="/about" style={linkStyle}>ABOUT</Link>
                    </A>
                </Li>
                <Li active={projects} className="nav-item px-1 py-2">
                    <A className="nav-link" onClick={(e) => {setHome(false); setAbout(false); setProjects(true); e.preventDefault()}}>
                        <Link to="/projects" style={linkStyle}>PROJECTS</Link>
                    </A>
                </Li>
            </ul>
            {/* <ul className="navbar-nav">
                <li className="nav-item">
                    <A className="nav-link">
                        <Link to="/projects" style={linkStyle}>PROJECTS</Link>
                    </A>
                </li>
            </ul> */}
        </nav>
    </Theme>);
}

export default Navigation;