import React from 'react';
import NavBarSga from '../NavBarSga'
import ConentListAdmin from '../ContentListAdmin'
import ConentNewUpdateAdmin from '../ContentNewUpdateAdmin'

class AdminUser extends React.Component {

	getComponentAdmin =  () => {
		if(this.props.match.params.method === "new" )
			return <ConentNewUpdateAdmin history={this.props.history}/>
		else if(this.props.match.params.method === "edit" )
			return <ConentNewUpdateAdmin history={this.props.history} user={this.props.user}/>
		else
			return <ConentListAdmin history={this.props.history}/>

	}

	render() {
		return (
	      <div className="bloque">
	        <NavBarSga administracion={true} history={this.props.history} />
	        {this.getComponentAdmin()}
	      </div>
		);
	}
}

export default  AdminUser;