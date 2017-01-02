import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
//import logo from './logo.svg';
import './App.css';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/repos/karel/programy" activeClassName="active">Karel</Link></li>
          <li><Link to="/repos/jirka/databaze" activeClassName="active">Jirka</Link></li>
        </ul>
        <div>
          {this.props.children || Home}
        </div>
      </div>
    );
  }
}

export default App;
