import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Content from './Global/Content';
import Header from './Global/Header'
import FooterApp from './Global/FooterApp'
import './App.css'

//import Error404 from '../services/Error404'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      session_user: sessionStorage.getItem('sessionUserSga')
    }
  }

  static PropTypes = {
    children: PropTypes.object.isRequired
  };



  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="Login" />
        <Content body={children} />
        <FooterApp />
      </div>

    );
  }
}

export default App;
