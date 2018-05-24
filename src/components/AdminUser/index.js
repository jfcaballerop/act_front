import React from 'react';
import NavBarSga from '../NavBarSga'
import ConentListAdmin from '../ContentListAdmin'

class AdminUser extends React.Component {

	render() {
		return (
	      <div className="bloque">
	        <NavBarSga administracion={true} />

	        <ConentListAdmin history={this.props.history}/>
	      </div>
		);
	}
}

export default  AdminUser;