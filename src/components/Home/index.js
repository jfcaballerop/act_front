import React, { Component } from 'react';

//Components
import Header from '../Global/Header'
import Content from '../Global/Content'




class Home extends Component {



	render() {
		return (

			<div className="content">
				<Header />
				<Content />
			</div>
		);
	}
}

export default Home;