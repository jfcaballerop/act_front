import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Route exact path="/" component={Login} />
      		<Route exact path="/Home" component={Home} />
      	</div>
      </Router>	
    );
  }
}

export default App;
