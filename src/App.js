import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Body, Tl, Bl, Footer, Particles } from './components/style.js';
import particles from './particles.json';

import tl from './assets/images/tl.svg';
import br from './assets/images/br.svg';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Scroll from './components/Scroll';

function App() {
  const root = process.env.REACT_APP_ROOT;
  return (
    <Router basename={root}>
      <Body>
        <Particles params={particles} />
        <Tl src={tl} alt="top-left" />
        <Bl src={br} alt="bottom-right" />
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/skills' component={Skills} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
        <Scroll />
      </Body>
      <Footer>&copy; Angelika Villanueva {new Date().getFullYear()}</Footer>
    </Router>
  );
}

export default App;
