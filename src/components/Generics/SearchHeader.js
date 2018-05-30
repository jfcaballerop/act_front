import React from 'react';
import { Icon } from 'react-materialize';

class SearchHeader extends React.Component {

	render() {
		return (
			<div className="section-data-container">
				<form className="section-data-form-container">
					<label>{this.props.title} <Icon>search</Icon></label>

					<input type="text" name="data_search" className="input-login" />
				</form>
			</div>
		);
	}
}

export default SearchHeader;