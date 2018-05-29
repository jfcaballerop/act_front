import React from 'react';
import './css/index.css'

class ContentData extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="section-data">
				<header>{this.props.header}</header>
				<section>{this.props.body}</section>
				<footer>{this.props.footer}</footer>
			</div>
		);
	}
}

export default ContentData;