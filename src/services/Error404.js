import React from 'react';
import './Error404.css'

class Error404 extends React.Component {

	render() {
		return (
			<div className="container-404">
				<header>
					<h4>Error 404</h4>
				</header>
				<section>
					<p>Page not found</p>
				</section>
			</div>
		);
	}
}

export default Error404;

