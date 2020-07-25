import React from 'react';
import { Theme, Nav, NavLink, selected } from './style.js';

function Navigation() {
  return (
    <Theme>
      <Nav className="navbar navbar-expand justify-content-center fixed-top">
        <ul className="navbar-nav">
          <NavLink exact to='/' activeStyle={selected} className="nav-item pb-1 px-md-3 px-2">HOME</NavLink>
          <NavLink exact to='/skills' activeStyle={selected} className="nav-item pb-1 px-md-3 px-2">SKILLS</NavLink>
          <NavLink exact to='/about' activeStyle={selected} className="nav-item pb-1 px-md-3 px-2">ABOUT</NavLink>
          {/* <NavLink exact to='/projects' activeStyle={selected} className="nav-item pb-1 px-md-3 px-2 ml-md-4 ml-2">PROJECTS</NavLink> */}
        </ul>
      </Nav>
    </Theme>
  );
}

export default Navigation;
