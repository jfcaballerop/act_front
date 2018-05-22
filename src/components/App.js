import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Home from './Home'
import AdminUser from './AdminUser'
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory()

class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
        session_user: sessionStorage.getItem('sessionUserSga')
      }
    }


    componentWillMount() {
      if (!this.state.session_user) {
        history.push('/')
      }
    }

  render() {
    return (
      <Router history={history}>
      	<div>
      		<Route exact path="/" component={Login}  />
          <Route exact path="/Home" component={Home} />
      		<Route exact path="/administracion/user" component={AdminUser}  />
      	</div>
      </Router>	
    );
  }
}

export default App;
