import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Body } from './style.js';

import Navigation from './Navigation';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';

function App() {
  return (<Router>
    <Body>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    </Body>
  </Router>);
}

export default App;
