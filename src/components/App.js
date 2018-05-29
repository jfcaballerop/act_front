import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

//Components
import Content from './Global/Content';
import Header from './Global/Header'
import FooterApp from './Global/FooterApp'
import './App.css'

//import Error404 from '../services/Error404'

// const SomeComponent = withRouter(props => <App {...props} />);


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      session_user: sessionStorage.getItem('sessionUserSga')
    }
  }

  static PropTypes = {
    children: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };



  render() {
    const { children, match, location } = this.props;

    return (
      <div className="App">
        {location.pathname !== '/' ? <Header /> : false}
        <Content body={children} />
        {location.pathname !== '/' ? <FooterApp /> : false}
      </div>

    );
  }
}

export default withRouter(App);
