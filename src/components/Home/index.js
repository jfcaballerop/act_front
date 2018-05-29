import React, { Component } from 'react';
//Components
import ContainerMain from '../../components/ContainerMain'
import Mapa from '../../components/Maps'






class Home extends Component {



	render() {
		return (

			<div className="content">
				<ContainerMain mapa={<Mapa />} />

			</div>
		);
	}
}

export default Home;