import React from 'react';
import './index.css';
import axios from 'axios';
import { Button } from 'react-materialize';
import TableContainer from '../TableContainer';
import ROUTESNAME from '../../services/routesName.js'

class ContentListAdmin extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			listaContenido: this.getUsersList()
		}
	}

	getUsersList = () =>{
		var self = this;
		axios.get(ROUTESNAME.showusers(),ROUTESNAME.getSessionToken('sessionUserSga'))
		.then(function (response) {
			if(response.status === 200)
				self.setState({listaContenido: response.data})
		});
	}

	render() {
		return (
			<div>
				<section className="section-user">
					<div className="admin-user-container">
						<form className="admin-user-form-container">
							<label>filtar usuario: </label>
							<input type="text" name="user_search" className="input-login"/>
						</form>
						<Button className="new-user-button" type = "submit" >Nuevo usuario</Button>
					</div>
					<TableContainer />
				</section>
			</div>
		);
	}
}

export default ContentListAdmin;