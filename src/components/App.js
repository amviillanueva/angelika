import dotenv from 'dotenv';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Body, Tl, Bl, Footer, Particles } from './style.js';
import particles from '../particles.json';

import tl from './images/tl.png';
import br from './images/br.png';

import Navigation from './Navigation';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';

function App() {
  dotenv.config();
  const root = process.env.REACT_APP_ROOT;
  return (<Router>
    <Body>
    <Particles params={particles} />
      <Tl src={tl} alt="top-left"></Tl>
      <Bl src={br} alt="bottom-right"></Bl>
      <Navigation />
      <Switch>
        <Route path={root} exact component={Home} />
        <Route path={root + "skills"} component={Skills} />
        <Route path={root + "about"} component={About} />
        <Route path={root + "projects"} component={Projects} />
      </Switch>
    </Body>
    <Footer>&copy; Angelika Villanueva {new Date().getFullYear()}</Footer>
  </Router>);
}

export default App;
