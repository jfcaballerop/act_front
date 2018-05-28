import React from 'react';

class SearchHeader extends React.Component {

	render() {
		return (
			<div className="admin-user-container">
				<form className="admin-user-form-container">
					<label>{this.props.title} </label>
					<input type="text" name="user_search" className="input-login" />
				</form>
			</div>
		);
	}
}

export default SearchHeader;