import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Body, Tl, Bl, Footer } from './style.js';

import tl from './images/tl.png';
import br from './images/br.png';

import Navigation from './Navigation';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';

function App() {
  return (<Router>
    <Body>
      <Tl src={tl} alt="top-left"></Tl>
      <Bl src={br} alt="bottom-right"></Bl>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    </Body>
    <Footer>Angelika Villanueva &copy; {new Date().getFullYear()}</Footer>
  </Router>);
}

export default App;
