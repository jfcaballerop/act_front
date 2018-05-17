import React from 'react';

class UserPanel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			login: this.props.user.login
		}
	}

	render() {
		return (
			<div>{this.state.login}</div>
		);
	}
}

export default UserPanel;