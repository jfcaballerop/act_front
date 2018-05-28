import React from 'react';

class ContainerMain extends React.Component {

	render() {
		return (
			<div className="containerMain">
				<div className="menu">
					{this.props.menu}
				</div>
				<div className="mapa">
					{this.props.mapa}
				</div>
			</div>
		);
	}
}

export default ContainerMain;