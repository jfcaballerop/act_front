import React from 'react';
import '../Global/css/ContentListAdmin.css';
import axios from 'axios';
import { Button } from 'react-materialize';
import TableContainer from '../TableContainer';
import ROUTESNAME from '../../services/routesName.js'
import { withRouter } from 'react-router-dom';


class ContentListAdmin extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			listaContenido: ""
		}
		const { location, history } = this.props;

	}

	componentDidMount() {
		this.setState({ listaContenido: this.getUsersList() })
	}

	getUsersList = () => {
		axios.get(ROUTESNAME.showusers(), ROUTESNAME.getSessionToken('sessionUserSga'))
			.then((response) => {
				if (response.status === 200) {
					this.setState({ listaContenido: response.data })
				}
			});
	}

	render() {
		// let self = this
		return (
			<div>
				{ this.state.listaContenido ? <TableContainer handlerUpdateParent={this.props.handlerUpdateParent} lista={this.state.listaContenido}/> : "" }
				<Button className="new-user-button" onClick={() => this.props.history.push('/administracion/users/new',this.props.handlerUpdateParent())} type="submit" >Nuevo usuario</Button>
			</div>
		);
	}
}

export default withRouter(ContentListAdmin);