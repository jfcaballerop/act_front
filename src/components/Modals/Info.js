import React from 'react';

class Info extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lista: this.props.items
		}
	}

	render() {
		return (
			<ul>
			{	
				this.state.lista.map((item,index) => {
				 return <li key={index}>{item}</li> 
				})
			}
		</ul>
		);
	}
}

export default Info;