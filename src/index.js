import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Test from './Test';
import Home from './Home';
import About from './About';
import Repos from './Repos';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Test}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/repos/:userName/:repoName" component={Repos} />
    </Route>
  </Router>
), document.getElementById('root'));