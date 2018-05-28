import React from 'react';
import NavBarSga from '../NavBarSga'
import ContainerMain from '../ContainerMain';
import Mapa from '../Maps';
import './index.css'


class Home extends React.Component {



	render() {
		return (
	      <div className="bloque">
	        <NavBarSga history={this.props.history} administracion={false}/>
	        <ContainerMain mapa={<Mapa />}/>
	      </div>
		);
	}
}

export default Home;