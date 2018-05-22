import React, { Component } from 'react';
import './App.css';
import NavBarSga from './components/NavBarSga'
import MenuActuacions from './components/MenuActuacions';
import ContainerMain from './components/ContainerMain';
import Mapa from './components/Maps'




class App extends Component {
	
  render() {
    return (
      <div className="App">
        <NavBarSga />
        <ContainerMain menu={<MenuActuacions />} mapa={<Mapa />}/>
      </div>
    );
  }
}

export default App;
